import {
  ButtonV2,
  Card,
  foundations,
  Label,
  SpinnerV2,
  TextInputV2,
} from "@meshkorea/vroong-design-system-web";
import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useRegisterStores } from "../RegisterProvider";

const Register = observer(() => {
  const { registerStore } = useRegisterStores();
  const { form, isLoading, register } = registerStore;

  return (
    <Wrapper>
      <RegisterBox radius="6px">
        <h1>회원가입</h1>
        <RegisterTextInputWrapper>
          <RegisterLabel htmlFor="username">아이디</RegisterLabel>
          <TextInputV2
            id="username"
            size="md"
            width="100%"
            placeholder="아이디 입력 (4~20자)"
            disabled={isLoading}
            {...form.getProps("username")}
          />
        </RegisterTextInputWrapper>
        <RegisterTextInputWrapper>
          <RegisterLabel htmlFor="username">비밀번호</RegisterLabel>
          <TextInputV2
            id="password"
            size="md"
            width="100%"
            type="password"
            placeholder="비밀번호 입력 (영문, 숫자 포함 4~20자)"
            disabled={isLoading}
            {...form.getProps("password")}
          />
        </RegisterTextInputWrapper>
        <RegisterTextInputWrapper>
          <RegisterLabel htmlFor="password-confirmation">
            비밀번호 확인
          </RegisterLabel>
          <TextInputV2
            id="password-confirmation"
            size="md"
            width="100%"
            type="password"
            placeholder="비밀번호 확인"
            disabled={isLoading}
            {...form.getProps("passwordConfirmation")}
          />
        </RegisterTextInputWrapper>
        <RegisterTextInputWrapper>
          <RegisterLabel htmlFor="display-name">닉네임</RegisterLabel>
          <TextInputV2
            id="display-name"
            size="md"
            width="100%"
            placeholder="닉네임 입력 (2~10자)"
            disabled={isLoading}
            {...form.getProps("displayName")}
          />
        </RegisterTextInputWrapper>
        <RegisterButton
          status="primary"
          size="md"
          disabled={isLoading}
          onClick={register}
        >
          {isLoading && <SpinnerV2 size="Medium" />}
          회원가입
        </RegisterButton>
        <RegisterWrapper>
          <LoginLink to="/login">로그인</LoginLink>
        </RegisterWrapper>
      </RegisterBox>
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

const RegisterBox = styled(Card)`
  width: 400px;
  padding: 30px;

  @media screen and (max-width: 400px) {
    width: 100%;
    margin: 16px;
  }
`;

const RegisterButton = styled(ButtonV2)`
  width: 100%;
  margin-bottom: 16px;
`;

const RegisterTextInputWrapper = styled.div`
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 20px;
  }
`;

const RegisterLabel = styled(Label)`
  margin-bottom: 4px;
  color: ${(props) => props.theme.palette.text.TertiaryText};
`;

const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginLink = styled(Link)`
  ${foundations.typography.Body2};
  color: ${(props) => props.theme.palette.text.PrimaryText};

  &:hover {
    text-decoration: underline;
  }
`;

export default Register;
