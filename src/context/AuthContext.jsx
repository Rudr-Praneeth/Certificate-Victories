import React, { createContext, useCallback, useContext, useState } from "react";
import { getLearner } from "../data/users";

const AuthContext = createContext(null);
const KEY = "coursera-clone-session";

const readSession = () => {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(readSession);

  const login = useCallback((value) => {
    const clean = value.trim().toLowerCase();
    try {
      localStorage.setItem(KEY, clean);
    } catch {}
    setEmail(clean);
  }, []);

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(KEY);
    } catch {}
    setEmail(null);
  }, []);

  const user = email ? { email, ...getLearner(email) } : null;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
