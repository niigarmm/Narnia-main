import { combineReducers, createStore, applyMiddleware } from "redux";
import productReducer from "../reducer/productReducer";
import { thunk } from "redux-thunk";
import authorReducer from "../reducer/authorReducer";
const rootReducer = combineReducers({
  product: productReducer,
  authors: authorReducer, 
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
