import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "../Layout";

const HomePage = lazy(() => import("./home/HomePage"));
const LoginPage = lazy(() => import("./login/LoginPage"));
const WelcomePage = lazy(() => import("./welcome/WelcomePage"));
const AuthorizePage = lazy(() => import("./authorize/AuthorizePage"));
const NotFound = lazy(() => import("./NotFound"));

const Routes = () => (
  <Layout>
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/authorize" component={AuthorizePage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Layout>
);

export default Routes;
