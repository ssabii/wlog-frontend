import React from "react";
import { Router, Route } from "react-router-dom";

import { useCore } from "core";

import Routes from "./routes";

const MainRouter = () => {
  const core = useCore();
  return (
    <Router history={core.router.synchronizedHistory}>
      <Route component={Routes} />
    </Router>
  );
};

export default MainRouter;
