export default (state, action) => {
  switch(action.type){
    case "Add_Item":
      return {
        ...state,
        totalItems: state.totalItems + 1,
        items: [action.payload, ...state.items],
        totalPrice :state.items.reduce((acc, item) => {
          return acc += item.price
        }, 0) + action.payload.price
      }
    default:
      return state;
  }
}