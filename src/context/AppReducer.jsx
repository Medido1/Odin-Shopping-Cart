export default (state, action) => {
  switch(action.type){
    case "Add_Item":
      const existingItem = state.items.find(
        (item) => item.title === action.payload.title
      )

      if (existingItem) {
        return {
          ...state,
          totalItems: state.totalItems + 1,
          items: state.items.map((item) => {
            return item.title === action.payload.title ?
            {...item, number: item.number + 1} :
            item
          }),
          totalPrice :state.items.reduce((acc, item) => {
            return acc + item.price
          }, 0) + action.payload.price
        }
      }
      return {
        ...state,
        totalItems: state.totalItems + 1,
        items: [{ ...action.payload, number: 1 }, ...state.items],
        totalPrice :state.items.reduce((acc, item) => {
          return acc += item.price
        }, 0) + action.payload.price
      };
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
    default:
      return state;
  }
}