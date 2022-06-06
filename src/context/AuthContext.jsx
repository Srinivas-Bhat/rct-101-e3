import React, { createContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  
  const login = () => {
    setIsAuth(true);
  }
  const logout = () => {
    setIsAuth(false);
  }
  return <AuthContext.Provider value={{isAuth, login, logout}} >{children}</AuthContext.Provider>;
};
