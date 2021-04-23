import { Redirect, Route } from "react-router-dom";
export default function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
