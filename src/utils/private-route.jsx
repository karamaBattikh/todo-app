import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useAuth();
  const token = Cookies.get("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        token || isAuthenticated ? (
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
