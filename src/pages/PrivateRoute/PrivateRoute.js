import React from "react";
import { Redirect, Route } from "react-router";
import Loader from "../../components/Loader";
import { useAuthContext } from "../../contexts/AuthProvider";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuthContext();
  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
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
