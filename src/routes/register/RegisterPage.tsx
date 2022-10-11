import React from "react";

import { RegisterBody, RegisterProvider } from "modules/auth/register";

const RegisterPage = () => (
  <RegisterProvider>
    <RegisterBody />
  </RegisterProvider>
);

export default RegisterPage;
