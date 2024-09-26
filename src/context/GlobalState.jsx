import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  totalItems: 0,
  items : [],
  totalPrice : 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addItem(item) {
    dispatch({
      type: "Add_Item",
      payload: item,
    })
  }

  return (
    <GlobalContext.Provider value={{ state, addItem }}>
      {children}
    </GlobalContext.Provider>
  );
};