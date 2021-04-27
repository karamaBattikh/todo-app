import Cookies from "js-cookie";
import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setUser({
        email: "test@test.com",
        username: "test",
      });
    }
  }, []);

  const signin = (values) => {
    if (values?.email === "test@test.com" && values?.password === "test") {
      Cookies.set("token", "test.user.token");
      setUser({
        email: values?.email,
        username: "test",
      });

      return { ok: true };
    }
    return { ok: false };
  };

  const signout = () => {
    Cookies.remove("token");
    window.location.replace("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        signout,
        signin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
