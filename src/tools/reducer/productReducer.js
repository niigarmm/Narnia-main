const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return action.products;
    default:
      return state;
  }
};
export default productReducer;
