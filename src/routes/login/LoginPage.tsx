import { observer } from "mobx-react";
import React, { FC } from "react";
import { Redirect, RouteComponentProps } from "react-router";

import { useCore } from "core";
import {
  PasswordLoginBody,
  PasswordLoginProvider,
} from "modules/auth/password-login";

const LoginPage: FC<RouteComponentProps> = observer(({ location }) => {
  const core = useCore();
  const { isLoggedIn } = core.auth;

  if (isLoggedIn) {
    const redirect = new URLSearchParams(location.search).get("redirect") || "";

    return (
      <Redirect
        to={`${decodeURIComponent(redirect) || "/main"}${location.hash || ""}`}
      />
    );
  }

  return (
    <PasswordLoginProvider>
      <PasswordLoginBody />
    </PasswordLoginProvider>
  );
});

export default LoginPage;
