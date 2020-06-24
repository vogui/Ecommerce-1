import { combineReducers } from "redux";
import productsReducer from "./products-reducer";
import loginReducer from "./login-reducer";
import registerReducer from "./register-reducer";
export default combineReducers({
  login: loginReducer,
  products: productsReducer,
  register: registerReducer,
});
