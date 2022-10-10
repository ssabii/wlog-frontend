import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "../Layout";

const HomePage = lazy(() => import("./home/HomePage"));
const LoginPage = lazy(() => import("./login/LoginPage"));
const NotFound = lazy(() => import("./NotFound"));

const Routes = () => (
  <Layout>
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/main" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Layout>
);

export default Routes;
