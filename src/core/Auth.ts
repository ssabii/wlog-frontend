import { setHeaders } from "api";
import { action, computed, observable } from "mobx";

import { formatError } from "lib/error";

// 여기서는 type만 사용하기 때문에, import type문 사용 (사용하지 않을 경우 circular dependency 발생)
import type Core from "./Core";
import { AccessTokenResult as User, AuthService } from "./services/AuthService";

const tokenStorageKey = "token";

export default class Auth {
  @observable
  public isTokenLoading = false;

  // undefined: 인증 데이터를 브라우저 sessionStorage에서 불러오는 중
  // null: 인증 데이터 존재하지 않음
  // User: 인증 데이터 있음
  @observable
  private user?: User | null;

  private tokenTimer?: number;

  private authService: AuthService;

  private core: Core;

  constructor(core: Core) {
    this.authService = new AuthService();
    this.core = core;
    this.init();
  }

  @computed
  get isLoggedIn(): boolean | undefined {
    if (this.user === undefined) {
      return undefined;
    }
    return !!this.user;
  }

  @computed
  get accessToken() {
    return this.user ? `Bearer ${this.user.accessToken}` : "";
  }

  @computed
  get refreshToken() {
    return this.user ? `Bearer ${this.user.refreshToken}` : "";
  }

  @action
  public login = async (username: string, password: string) => {
    try {
      this.isTokenLoading = true;
      this.user = await this.authService.login(username, password);
      this.startUpdateTokenTimer();
      setHeaders(this.accessToken, this.refreshToken);
      sessionStorage.setItem(tokenStorageKey, JSON.stringify(this.user));
    } catch (e) {
      const error = e as Error;
      this.user = null;
      this.core.dialog.openAlert({
        title: "로그인 실패",
        message: error.message,
      });
    } finally {
      this.isTokenLoading = false;
    }
  };

  @action
  public refresh = async () => {
    try {
      this.user = await this.authService.refresh();
      this.startUpdateTokenTimer();
      setHeaders(this.accessToken, this.refreshToken);
      sessionStorage.setItem(tokenStorageKey, JSON.stringify(this.user));
    } catch (e) {
      this.user = null;
      this.core.dialog.openAlert({
        title: "인증 실패",
        message: "사용자 인증에 실패하였습니다.",
      });
    }
  };

  @action
  public logout = async () => {
    try {
      await this.authService.logout();
      this.clearSession(true);
    } catch (e) {
      this.clearSession(false);
    }
  };

  @action
  private startUpdateTokenTimer = () => {
    if (this.user === null) return;

    if (this.tokenTimer && this.tokenTimer > 0) {
      clearInterval(this.tokenTimer);
    }

    this.tokenTimer = window.setInterval(() => {
      this.updateToken();
    }, 5000);
  };

  @action
  private updateToken = async () => {
    try {
      if (!this.user) return;

      const currentTime = new Date().getTime();
      const expectedLatencyTime = 1000;

      if (currentTime >= this.user.tokenExpireTime - expectedLatencyTime) {
        await this.refresh();
      }
    } catch (e) {
      const error = e as Error;
      this.core.dialog.openAlert({
        title: "재인증 실패",
        message: error.message,
      });
    }
  };

  @action
  private init = async () => {
    const user = sessionStorage.getItem(tokenStorageKey);

    if (user) {
      try {
        const userObject = JSON.parse(user) as User;
        if (isValidUserObject(userObject)) {
          if (Date.now() >= userObject.tokenExpireTime) {
            await this.refresh();
          } else {
            this.user = userObject;
            this.startUpdateTokenTimer();
          }
        } else {
          throw new Error();
        }
      } catch (e) {
        this.core.dialog.openAlert({
          title: "인증 오류",
          message:
            "접속 유저 정보가 잘못되었습니다. 로그아웃 후 재접속이 필요합니다.",
          onConfirm: () => {
            this.clearSession(false);
          },
        });
      }
    } else {
      this.user = null;
    }
  };

  @action
  private clearSession = async (isExplicit: boolean) => {
    try {
      window.clearInterval(this.tokenTimer);
      this.user = isExplicit ? undefined : null;
    } catch (e) {
      const formattedError = await formatError(e);
      this.core.dialog.openAlert({
        title: "세션 만료",
        message: formattedError.displayMessage,
      });
    }
  };
}

const isValidUserObject = (user?: User): boolean =>
  !!user &&
  !!user.id &&
  !!user.username &&
  !!user.accessToken &&
  !!user.refreshToken &&
  !!user.tokenExpireTime &&
  !!user.tokenIssueTime;
