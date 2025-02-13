const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return state;
    case "ADD_PRODUCT":
      return [...state,action.payload];
      case "REMOVE_PRODUCT":
        return state.filter(p=>p.id !==action.id)
    default:
      return state;
  }
};
export default productReducer;
