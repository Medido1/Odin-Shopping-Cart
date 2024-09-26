export default (state, action) => {
  switch(action.type){
    case "Add_Item":
      return {
        ...state,
        totalItems: state.totalItems + 1,
      }
    default:
      return state;
  }
}