export default (state, action) => {
  switch(action.type){
    case "Add_Item":
      const existingItem = state.items.find(
        (item) => item.title === action.payload.title
      )
      if (existingItem){
        return {
          ...state,
          items: state.items.map((item) => 
          item.title === action.payload.title 
          ? { ...item, number: item.number + 1 } 
          : item
        )}
      } else {
        return {
          ...state,
          items: [action.payload, ...state.items]
        }
      }
    case "toggle_cart":
      return {
        ...state,
        showCart : !state.showCart,
      }
    case "confirm_order":
      return {
        ...state,
        confirmed: true,
      }
    case "reset_order":
      return {
        ...state,
        totalItems: 0,
        items : [],
        totalPrice : 0,
        showCart: false,
        confirmed: false,
      }
    case "delete_order":
      return {
        ...state,
        items: 
          state.items.filter(
            item => item.title !== action.payload
          )
      }
    default:
      return state;
  }
}