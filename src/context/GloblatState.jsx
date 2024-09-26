import { createContext, useReducer } from "react";

const initialState = {
  totalItems: 0,
};

export const GlobalContext = createContext(initialState);

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        totalItems: state.totalItems + 1,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        totalItems: state.totalItems > 0 ? state.totalItems - 1 : 0,
      };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};