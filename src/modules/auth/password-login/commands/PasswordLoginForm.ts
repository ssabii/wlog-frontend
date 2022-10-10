import Form, {
  required,
  label,
  defaultValue,
  length,
} from "@meshkorea/cake-form";

import PasswordLoginFormSource from "../models/PasswordLoginFormSource";

class PasswordLoginForm
  extends Form<PasswordLoginFormSource>
  implements PasswordLoginFormSource
{
  @label("아이디")
  @required()
  @length(4, 20, "아이디는 4자 이상 20자 이하로 입력해주세요.")
  @defaultValue("")
  public username: string;

  @label("비밀번호")
  @required()
  @length(4, 20, "비밀번호는 4자 이상 20자 이하로 입력해주세요.")
  @defaultValue("")
  public password: string;
}

export default PasswordLoginForm;
