
import { combineReducers } from "redux";
import productsReducer from "./products-reducer";
import loginReducer from "./login-reducer";
import productsReducer from './products-reducer'
export default combineReducers({
  products: productsReducer,
  login: loginReducer,
  products: productsReducer,
});

