import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Login}
      >
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default withRouter(Routes);
