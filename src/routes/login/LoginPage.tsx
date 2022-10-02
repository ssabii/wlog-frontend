import React from "react";

import {
  PasswordLoginBody,
  PasswordLoginProvider,
} from "modules/auth/password-login";

const LoginPage = () => (
  <PasswordLoginProvider>
    <PasswordLoginBody />
  </PasswordLoginProvider>
);

export default LoginPage;
