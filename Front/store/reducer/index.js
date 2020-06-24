
import { combineReducers } from "redux";
import productsReducer from "./products-reducer";
import loginReducer from "./login-reducer";

export default combineReducers({
  products: productsReducer,
  login: loginReducer,
  products: productsReducer,
});

