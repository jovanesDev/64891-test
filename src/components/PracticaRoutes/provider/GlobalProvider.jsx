/* eslint-disable react/prop-types */
import { createContext } from "react";
import useUser from "../hooks/useUser";
import useTarea from "../hooks/useTarea";

export const GlobalContext = createContext("");

const GlobalProvider = ({ children }) => {
  const usuarios = useUser();
  const tareas = useTarea();

  return (
    <GlobalContext.Provider value={{usuarios,tareas}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
