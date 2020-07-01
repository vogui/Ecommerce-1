import { LOGIN_USER, GET_CART } from "../constans";
import axios from "axios";

const LoginUser = (dataUser, booleanLogin, booleanRedirect) => ({
  type: LOGIN_USER,
  data: { dataUser, failLogin: booleanLogin, redirect: booleanRedirect },
});

const GetCart = (cart) => ({
  type: GET_CART,
  data: cart,
});

export const loginUser = (email, password) => (dispatch) => {
  console.log('entrando aloginnn!!!!')
  return axios
    .post("/api/users/login", { email, password })
    .then((resp) => {
      console.log('RESP PUNTO DATA', resp.data)
      if (resp.request.status == 200) {
        console.log("entre ok 200")
        var objLogin = new Object();
        objLogin.adress= resp.data.adress
        objLogin.email= resp.data.email
        objLogin.id= resp.data.id
        objLogin.isAdmin= resp.data.isAdmin
        objLogin.name= resp.data.name
        dispatch(LoginUser(objLogin, false, true))
      }
      if (resp.request.status == 401) {
        console.log("entre en error 401")
        dispatch(LoginUser({}, true, false));
      }
      var objCart = new Object();
      console.log("resp.data CARRITOO", resp.data)
      objCart.products= resp.data.cart.products
      objCart.total= resp.data.cart.total
      dispatch(GetCart(objCart))
    })
    .catch((err) => {
      console.log("estoy en el error de login")
      dispatch(LoginUser({}, true));
    });
};

export const failLoginFalse = () => (dispatch) => {
  dispatch(LoginUser(undefined, false, undefined));
};


