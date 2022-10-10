import { GlobalNavigationBar } from "@meshkorea/vroong-design-system-web";
import { observer } from "mobx-react";
import React from "react";
// @ts-ignore
import Div100vh from "react-div-100vh";
import { Route, Switch } from "react-router";
import styled from "styled-components";

import AlertWrapper from "components/AlertWrapper";
import SpinnerWrapper from "components/SpinnerWrapper";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = observer(({ children }: LayoutProps) => (
  <Body>
    <Switch>
      <Route path={["/login", "/register"]}>{children}</Route>
      <Route path={["/main"]}>
        <GlobalNavigationBar />
        <Main>{children}</Main>
      </Route>
    </Switch>
    <AlertWrapper />
    <SpinnerWrapper />
  </Body>
));

export default Layout;

const Body = styled(Div100vh)`
  padding: 16px;
  background-color: ${({ theme }) => theme.palette.core.BackgroundSecondary};
`;

const Main = styled.main`
  height: 100%;
  padding-top: 40px;
`;
