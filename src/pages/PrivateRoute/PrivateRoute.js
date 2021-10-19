import React from "react";
import { Redirect, Route } from "react-router";
import Loading from "../../components/Loading";
import { useAuthContext } from "../../contexts/AuthProvider";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuthContext;
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
