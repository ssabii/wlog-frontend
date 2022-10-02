import React, { useState } from "react";

import { useCore } from "core";
import { generateUseContext } from "lib/context";

import UaaLoginStore from "./UaaLoginStore";

interface LocalStores {
  uaaLoginStore: UaaLoginStore;
}

const LocalContext = React.createContext<LocalStores | null>(null);

export const useUaaLoginStores = generateUseContext(LocalContext);

const UaaLoginPageProvider: React.FC = ({ children }) => {
  const core = useCore();
  const [stores] = useState<LocalStores>({
    uaaLoginStore: new UaaLoginStore(core),
  });

  return (
    <LocalContext.Provider value={stores}>{children}</LocalContext.Provider>
  );
};

export default UaaLoginPageProvider;
