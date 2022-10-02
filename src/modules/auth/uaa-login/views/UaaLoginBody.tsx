import { ButtonV2 } from "@meshkorea/vroong-design-system-web";
import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useUaaLoginStores } from "../UaaLoginProvider";

const UaaLoginPageBody = observer(() => {
  const { uaaLoginStore } = useUaaLoginStores();
  const { login } = uaaLoginStore;

  return (
    <Wrapper>
      <LoginBox>
        <h1>Login</h1>
        <ButtonV2 onClick={login}>UAA로 로그인</ButtonV2>
      </LoginBox>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  width: 500px;
  text-align: center;
`;

export default UaaLoginPageBody;
