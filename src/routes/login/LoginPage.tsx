import React from "react";

import { UaaLoginBody, UaaLoginProvider } from "modules/auth/uaa-login";
// import {
//   PasswordLoginBody,
//   PasswordLoginProvider,
// } from "modules/auth/password-login";

const LoginPage = () => (
  <UaaLoginProvider>
    <UaaLoginBody />
  </UaaLoginProvider>
);

// const LoginPage = () => (
//   <PasswordLoginProvider>
//     <PasswordLoginBody />
//   </PasswordLoginProvider>
// );

export default LoginPage;
