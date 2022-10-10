import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { PrivateRoute } from "lib/router";

import Layout from "../Layout";

const HomePage = lazy(() => import("./home/HomePage"));
const LoginPage = lazy(() => import("./login/LoginPage"));
const NotFound = lazy(() => import("./NotFound"));

const Routes = () => (
  <Layout>
    <Suspense fallback={<div />}>
      <Switch>
        <PrivateRoute exact path="/main" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Layout>
);

export default Routes;
