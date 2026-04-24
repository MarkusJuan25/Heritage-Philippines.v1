import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(undefined);

const readStoredToken = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem("heritageToken");
};

export function AuthProvider({ children }) {
  const [token, setToken] = useState(readStoredToken);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const login = (newToken) => {
    localStorage.setItem("heritageToken", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("heritageToken");
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn: Boolean(token), ready, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
