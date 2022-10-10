import {
  ButtonV2,
  Card,
  foundations,
  TextInputV2,
} from "@meshkorea/vroong-design-system-web";
import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { usePasswordLoginStores } from "../PasswordLoginProvider";

const PasswordLoginPageBody = observer(() => {
  const { passwordLoginStore } = usePasswordLoginStores();
  const { form, login } = passwordLoginStore;

  return (
    <Wrapper>
      <LoginBox radius="6px">
        <h1>로그인</h1>
        <LoginTextInputWrapper>
          <TextInputV2
            id="username"
            size="md"
            width="100%"
            placeholder="아이디"
            {...form.getProps("username")}
          />
        </LoginTextInputWrapper>
        <LoginTextInputWrapper>
          <TextInputV2
            id="password"
            size="md"
            width="100%"
            type="password"
            placeholder="비밀번호"
            {...form.getProps("password")}
          />
        </LoginTextInputWrapper>
        <LoginButton status="primary" onClick={login} size="md">
          로그인
        </LoginButton>
        <RegisterWrapper>
          <RegisterLink to="/register">회원가입</RegisterLink>
        </RegisterWrapper>
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

const LoginBox = styled(Card)`
  width: 400px;
  padding: 30px;

  @media screen and (max-width: 400px) {
    width: 100%;
    margin: 16px;
  }
`;

const LoginButton = styled(ButtonV2)`
  width: 100%;
  margin-bottom: 16px;
`;

const LoginTextInputWrapper = styled.div`
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 20px;
  }
`;

const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const RegisterLink = styled(Link)`
  ${foundations.typography.Body2};
  color: ${(props) => props.theme.palette.text.PrimaryText};

  &:hover {
    text-decoration: underline;
  }
`;

export default PasswordLoginPageBody;
