import { BaseTheme } from "@meshkorea/vroong-design-system-web";
import { observer } from "mobx-react";
import React from "react";
import { ThemeProvider } from "styled-components";

import "sanitize.css/sanitize.css";

import CoreProvider from "core/CoreProvider";

import GlobalStyle from "./GlobalStyle";
import MainRouter from "./MainRouter";

const App = observer(() => (
  <ThemeProvider theme={BaseTheme}>
    <CoreProvider>
      <GlobalStyle />
      <MainRouter />
    </CoreProvider>
  </ThemeProvider>
));

export default App;
