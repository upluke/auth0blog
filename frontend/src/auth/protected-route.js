import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components/index";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />, //if the user is logged in in the meantime while it's redirecting it will show a loading
    })}
    {...args}
  />
);

export default ProtectedRoute;