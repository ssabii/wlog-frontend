import React, { lazy, Suspense, useCallback } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { PrivateRoute } from "lib/router";

import Layout from "../Layout";

const MainPage = lazy(() => import("./main/MainPage"));
const LoginPage = lazy(() => import("./login/LoginPage"));
const RegisterPage = lazy(() => import("./register/RegisterPage"));
const NotFound = lazy(() => import("./NotFound"));

const Routes = () => {
  const redirectFromRoot = useCallback(() => <Redirect to="/main" />, []);

  return (
    <Layout>
      <Suspense fallback={<div />}>
        <Switch>
          <PrivateRoute exact path="/main" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/" component={redirectFromRoot} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default Routes;
