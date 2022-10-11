import Form, {
  defaultValue,
  dynamicRule,
  label,
  length,
  regex,
  required,
} from "@meshkorea/cake-form";

import Register from "../models/Register";

class RegisterForm extends Form<Register> implements Register {
  @label("아이디")
  @required()
  @length(4, 20, "아이디는 4자 이상 20자 이하로 입력해주세요.")
  @regex(/^[a-zA-Z0-9]{4,20}$/, {
    message: "아이디는 영문, 숫자로 입력해주세요.",
  })
  @defaultValue("")
  public username: string;

  @label("비밀번호")
  @required()
  @length(4, 20, "비밀번호는 4자 이상 20자 이하로 입력해주세요.")
  @defaultValue("")
  public password: string;

  @label("비밀번호 확인")
  @required()
  @length(4, 20, "비밀번호는 4자 이상 20자 이하로 입력해주세요.")
  @dynamicRule("checkPassword", {
    message: "비밀번호가 일치하지 않습니다.",
  })
  @defaultValue("")
  public passwordConfirmation: string;

  @label("닉네임")
  @defaultValue("")
  @length(2, 10, "닉네임은 2자 이상 10자 이하로 입력해주세요.")
  @regex(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/, {
    message: "닉네임은 한글, 영문, 숫자로 입력해주세요.",
  })
  public displayName: string;
}

export default RegisterForm;
