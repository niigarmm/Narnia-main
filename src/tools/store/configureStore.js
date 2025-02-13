import { combineReducers, createStore } from "redux";
import productReducer from "../reducer/productReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      product: productReducer,
    })
  );
  return store;
};
export default configureStore;
