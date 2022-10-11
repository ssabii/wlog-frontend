import { ButtonV2, Card, IconV2 } from "@meshkorea/vroong-design-system-web";
import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";

import { useCore } from "core";

const RegisterComplete = observer(() => {
  const core = useCore();

  const handleClick = () => {
    core.router.history.push("/login");
  };

  return (
    <Wrapper>
      <RegisterBox radius="6px">
        <h1>회원가입 완료</h1>
        <ContentWrapper>
          <Icon name="CHECK_CIRCLE" width="64px" height="64px" />
          <Content>회원가입이 완료되었습니다.</Content>
        </ContentWrapper>
        <RegisterButton status="primary" onClick={handleClick} size="md">
          로그인 페이지로 이동
        </RegisterButton>
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  margin-bottom: 16px;
`;

const Icon = styled(IconV2)`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.palette.core.BaseSuccess};
`;

const RegisterButton = styled(ButtonV2)`
  width: 100%;
  margin-bottom: 16px;
`;

export default RegisterComplete;
