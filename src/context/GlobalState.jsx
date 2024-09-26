import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  totalItems: 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addItem() {
    dispatch({
      type: "Add_Item"
    })
  }

  return (
    <GlobalContext.Provider value={{ state, addItem }}>
      {children}
    </GlobalContext.Provider>
  );
};