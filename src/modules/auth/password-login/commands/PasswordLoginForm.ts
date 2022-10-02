import Form, { required, label, defaultValue } from "@meshkorea/cake-form";

import PasswordLoginFormSource from "../models/PasswordLoginFormSource";

class PasswordLoginForm
  extends Form<PasswordLoginFormSource>
  implements PasswordLoginFormSource
{
  @label("아이디")
  @required("required")
  @defaultValue("")
  public username: string;

  @label("비밀번호")
  @required("required")
  @defaultValue("")
  public password: string;
}

export default PasswordLoginForm;
