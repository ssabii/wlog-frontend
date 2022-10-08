/* eslint-disable camelcase, class-methods-use-this, no-await-in-loop */
import auth from "api/auth";

export interface TokenResultDTO {
  access_token: string;
  token_type: string;
  refresh_token: string;
  scope: string;
  expires_in: number;
  iat: number;
  jti: string;
}

// TokenResultDTO의 access_token의 payload가 객체로 파싱된 후 인터페이스
interface AccessTokenDTO {
  id: string;
  username: string;
  displayName: string;
  iat: number;
  exp: number;
}
export interface AccessTokenResult {
  id: string;
  username: string;
  displayName: string;
  accessToken: string;
  refreshToken: string;
  tokenExpireTime: number;
  tokenIssueTime: number;
}

export interface TokenEndpointRequestOption {
  refreshToken?: string;
  code?: string;
}

export interface UaaTokenApi {
  getToken: (option: TokenEndpointRequestOption) => Promise<TokenResultDTO>;
}

export const getPayloadFromJWT = (encodded: string) =>
  JSON.parse(atob(encodded.split(".")[1])) as AccessTokenDTO;

export class AuthService {
  public async login(
    username: string,
    password: string,
  ): Promise<AccessTokenResult> {
    try {
      const res = await auth.login(username, password);
      const { accessToken, refreshToken } = res.data.token;
      const accessTokenPayload = getPayloadFromJWT(accessToken);

      return {
        id: accessTokenPayload.id,
        username: accessTokenPayload.username,
        displayName: accessTokenPayload.displayName,
        accessToken,
        refreshToken,
        tokenExpireTime: accessTokenPayload.exp,
        tokenIssueTime: accessTokenPayload.iat,
      };
    } catch (e) {
      throw await e;
    }
  }

  public async refresh() {
    try {
      const res = await auth.refresh();
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        res.data.token;
      const accessTokenPayload = getPayloadFromJWT(newAccessToken);

      return {
        id: accessTokenPayload.id,
        username: accessTokenPayload.username,
        displayName: accessTokenPayload.displayName,
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        tokenExpireTime: accessTokenPayload.exp,
        tokenIssueTime: accessTokenPayload.iat,
      };
    } catch (e) {
      throw await e;
    }
  }

  public async logout() {
    try {
      await auth.logout();
    } catch (e) {
      throw await e;
    }
  }
}
