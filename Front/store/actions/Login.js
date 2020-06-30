import { LOGIN_USER, GET_CART } from "../constans";
import axios from "axios";

const LoginUser = (dataUser, booleanLogin, booleanRedirect) => ({
  type: LOGIN_USER,
  data: { dataUser, failLogin: booleanLogin, redirect: booleanRedirect },
});

const GetCart = (cart) => ({
  type: GET_CART,
  cart,
});


export const loginUser = (email, password) => (dispatch) => {
  axios
    .post("/api/users/login", { email, password })
    .then((resp) => {
      if (resp.request.status == 200) {
        dispatch(LoginUser(resp.data, false, true))
        // .then(()=> console.log());
      }
      if (resp.request.status == 401) {
        dispatch(LoginUser({}, true, false));
      }
    })
    .catch((err) => {
      dispatch(LoginUser({}, true));
    });
};

export const getCart = (userId) => (dispatch) => {
  axios
    .get("/api/cart", {userId})
    .then((resp) => {
      console.log("CARRITO ENCONTRADO: ", resp);
      if (resp.request.status == 200) {
        dispatch(GetCart(resp.data))
        .then(()=> console.log("carrito encontrado?: ",resp.data));
      } else console.log("entre en el ELSE DEL CARRITO POR USUARIO, no deberia haber carrito")
    })
};

export const failLoginFalse = () => (dispatch) => {
  dispatch(LoginUser(undefined, false, undefined));
};


