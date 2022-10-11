import { observer } from "mobx-react";
import React from "react";

import { useRegisterStores } from "../RegisterProvider";

import Register from "./Register";
import RegisterComplete from "./RegisterComplete";

const RegisterBody = observer(() => {
  const { registerStore } = useRegisterStores();
  const { isCompleted } = registerStore;

  return isCompleted ? <RegisterComplete /> : <Register />;
});
export default RegisterBody;
