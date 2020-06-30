import { combineReducers } from "redux";
import productsReducer from "./products-reducer";
import loginReducer from "./login-reducer";
import registerReducer from "./register-reducer";
import categoryReducer from './category-reducer';
import reviewReducer from './review-reducer'
export default combineReducers({
  categorys: categoryReducer,
  login: loginReducer,
  products: productsReducer,
  register: registerReducer,
  reviews: reviewReducer,
});