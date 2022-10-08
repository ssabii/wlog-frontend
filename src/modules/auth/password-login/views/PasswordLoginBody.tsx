import {
  ButtonV2,
  Label,
  TextInputV2,
} from "@meshkorea/vroong-design-system-web";
import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";

import { usePasswordLoginStores } from "../PasswordLoginProvider";

const PasswordLoginPageBody = observer(() => {
  const { passwordLoginStore } = usePasswordLoginStores();
  const { form, login } = passwordLoginStore;

  return (
    <Wrapper>
      <LoginBox>
        <h1>로그인</h1>
        <LoginTextInputWrapper>
          <LoginLabel htmlFor="username">아이디</LoginLabel>
          <TextInputV2
            id="username"
            size="md"
            width="100%"
            {...form.getSimpleProps("username")}
          />
        </LoginTextInputWrapper>
        <LoginTextInputWrapper>
          <LoginLabel htmlFor="password">비밀번호</LoginLabel>
          <TextInputV2
            id="password"
            size="md"
            width="100%"
            type="password"
            {...form.getSimpleProps("password")}
          />
        </LoginTextInputWrapper>
        <LoginButton status="primary" onClick={login} size="md">
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
  width: 400px;
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
