import {
  ButtonV2,
  Label,
  TextInputV2,
} from "@meshkorea/vroong-design-system-web";
import { observer } from "mobx-react";
import React, { useCallback } from "react";
import styled from "styled-components";

import { usePasswordLoginStores } from "../PasswordLoginProvider";

const PasswordLoginPageBody = observer(() => {
  const { passwordLoginStore } = usePasswordLoginStores();
  const { form, login } = passwordLoginStore;

  const handleUsernameChange = useCallback(
    (username) => form.update({ username }),
    [form],
  );
  const handlePasswordChange = useCallback(
    (password) => form.update({ password }),
    [form],
  );

  return (
    <Wrapper>
      <LoginBox>
        <h1>Login</h1>
        <LoginTextInputWrapper>
          <LoginLabel htmlFor="login-username">아이디</LoginLabel>
          <TextInputV2
            id="login-username"
            {...form.getSimpleProps("username")}
            size="lg"
            width="100%"
            onChange={handleUsernameChange}
          />
        </LoginTextInputWrapper>
        <LoginTextInputWrapper>
          <LoginLabel htmlFor="login-password">비밀번호</LoginLabel>
          <TextInputV2
            id="login-password"
            {...form.getSimpleProps("password")}
            size="lg"
            width="100%"
            type="password"
            onChange={handlePasswordChange}
          />
        </LoginTextInputWrapper>
        <LoginButton status="primary" onClick={login} size="lg">
          Login
        </LoginButton>
      </LoginBox>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const LoginBox = styled.div`
  width: 500px;
`;

const LoginButton = styled(ButtonV2)`
  width: 100%;
`;

const LoginTextInputWrapper = styled.div`
  margin-bottom: 12px;

  &:last-of-type {
    margin-bottom: 20px;
  }
`;

const LoginLabel = styled(Label)`
  margin-bottom: 4px;
  color: ${(props) => props.theme.palette.text.TertiaryText};
`;

export default PasswordLoginPageBody;
