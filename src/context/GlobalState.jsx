import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  items : [],
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

  function deleteOrder(title) {
    dispatch({
      type: "delete_order",
      payload: title,
    })
  }

  return (
    <GlobalContext.Provider value={{ 
      state, 
      addItem, 
      toggleCart, 
      confirmOrder, 
      resetOrder,
      deleteOrder,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};