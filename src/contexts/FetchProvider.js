import React, { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
  const { data: doctors, isLoading } = useFetch("/doctorsData.json");
  return (
    <FetchContext.Provider value={{ isLoading, doctors }}>
      {children}
    </FetchContext.Provider>
  );
};
export const useFetchContext = () => useContext(FetchContext);
