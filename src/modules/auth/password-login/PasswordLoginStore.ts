import { observable, action } from "mobx";

import Core from "core";

import PasswordLoginForm from "./commands/PasswordLoginForm";

export default class PasswordLoginStore {
  @observable
  public form: PasswordLoginForm = new PasswordLoginForm();

  private core: Core;

  constructor(core: Core) {
    this.core = core;
  }

  @action
  public login = async () => {
    await this.core.auth.login(this.form.username, this.form.password);
  };
}
