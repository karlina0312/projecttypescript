import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ErrorPage6 } from "./ErrorPage6";

export default function ErrorsPage() {
  return (
    <Switch>
      <Redirect from="/error" exact={true} to="/error/error" />
      <Route path="/error/error" component={ErrorPage6} />
    </Switch>
  );
}
