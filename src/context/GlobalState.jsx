import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  totalItems: 0,
  items : [],
  totalPrice : 0,
  showCart: false,
  confirmed: false,
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

  function toggleCart() {
    dispatch({
      type: "toggle_cart",
    })
  }

  function confirmOrder() {
    dispatch({
      type: "confirm_order",
    })
  }

  function resetOrder() {
    dispatch({
      type: "reset_order",
    })
  }

  return (
    <GlobalContext.Provider value={{ state, addItem, toggleCart, confirmOrder, resetOrder }}>
      {children}
    </GlobalContext.Provider>
  );
};