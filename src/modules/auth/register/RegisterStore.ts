import { DynamicRules } from "@meshkorea/cake-form";
import { observable, action } from "mobx";

import Core from "core";

import RegisterForm from "./commands/RegisterForm";
import { RegisterService } from "./services/RegisterService";

export default class RegisterStore {
  @observable
  public form: RegisterForm;

  @observable
  public isCompleted = false;

  @observable
  public isLoading = false;

  private registerService: RegisterService;

  private core: Core;

  constructor(core: Core) {
    this.core = core;
    this.registerService = new RegisterService();

    this.resetForm();
  }

  @action
  public register = async () => {
    const isValid = await this.form.validate();

    if (!isValid) {
      return;
    }

    try {
      this.isLoading = true;
      await this.registerService.register(this.form);
      this.isCompleted = true;
    } catch (e) {
      const error = e as Error;
      this.core.dialog.openAlert({
        title: "회원가입 실패",
        message: error.message,
      });
    } finally {
      this.isLoading = false;
    }
  };

  private resetForm = () => {
    this.form = new RegisterForm(undefined, {
      dynamicRules: this.dynamicRules,
    });
  };

  private checkPassword = () => {
    if (this.form.password === this.form.passwordConfirmation) {
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  };

  private dynamicRules: DynamicRules = {
    checkPassword: this.checkPassword,
  };
}
