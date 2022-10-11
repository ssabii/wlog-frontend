import React, { useState } from "react";

import { useCore } from "core";
import { generateUseContext } from "lib/context";

import RegisterStore from "./RegisterStore";

interface LocalStores {
  registerStore: RegisterStore;
}

const LocalContext = React.createContext<LocalStores | null>(null);

export const useRegisterStores = generateUseContext(LocalContext);

const RegisterProvider: React.FC = ({ children }) => {
  const core = useCore();
  const [stores] = useState<LocalStores>({
    registerStore: new RegisterStore(core),
  });

  return (
    <LocalContext.Provider value={stores}>{children}</LocalContext.Provider>
  );
};

export default RegisterProvider;
