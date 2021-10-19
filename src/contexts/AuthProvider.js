import React, { createContext, useContext } from "react";
import useFirebase from "../hooks/useFirebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
