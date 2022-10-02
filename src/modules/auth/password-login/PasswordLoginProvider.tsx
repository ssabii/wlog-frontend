import React, { useState } from "react";

import { useCore } from "core";
import { generateUseContext } from "lib/context";

import PasswordLoginStore from "./PasswordLoginStore";

interface LocalStores {
  passwordLoginStore: PasswordLoginStore;
}

const LocalContext = React.createContext<LocalStores | null>(null);

export const usePasswordLoginStores = generateUseContext(LocalContext);

const PasswordLoginPageProvider: React.FC = ({ children }) => {
  const core = useCore();
  const [stores] = useState<LocalStores>({
    passwordLoginStore: new PasswordLoginStore(core),
  });

  return (
    <LocalContext.Provider value={stores}>{children}</LocalContext.Provider>
  );
};

export default PasswordLoginPageProvider;
