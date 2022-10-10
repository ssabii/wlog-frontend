import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { PrivateRoute } from "lib/router";

import Layout from "../Layout";

const MainPage = lazy(() => import("./main/MainPage"));
const LoginPage = lazy(() => import("./login/LoginPage"));
const NotFound = lazy(() => import("./NotFound"));

const Routes = () => (
  <Layout>
    <Suspense fallback={<div />}>
      <Switch>
        <PrivateRoute exact path="/main" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Layout>
);

export default Routes;
