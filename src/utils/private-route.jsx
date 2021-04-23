import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useAuth();
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
