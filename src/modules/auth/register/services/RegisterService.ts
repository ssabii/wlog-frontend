import authApi from "api/auth";

import RegisterForm from "../commands/RegisterForm";

export class RegisterService {
  // eslint-disable-next-line class-methods-use-this
  public async register(form: RegisterForm) {
    await authApi.register(form.username, form.password, form.displayName);
  }
}
