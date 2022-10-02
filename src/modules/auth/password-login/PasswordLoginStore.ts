import { observable, action } from "mobx";

import Core from "core";

import PasswordLoginForm from "./commands/PasswordLoginForm";

export default class PasswordLoginStore {
  @observable
  public form: PasswordLoginForm = new PasswordLoginForm();

  @observable
  public isLoading = false;

  private core: Core;

  constructor(core: Core) {
    this.core = core;
  }

  @action
  // eslint-disable-next-line require-await
  public login = () => {
    this.isLoading = true;
    try {
      // await this.core.auth.login(this.form.username, this.form.password);
    } catch (e) {
      this.core.dialog.openAlert({
        title: "로그인 실패",
        message: "로그인에 실패하였습니다.",
      });
    } finally {
      this.isLoading = false;
    }
  };
}
