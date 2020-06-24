import { LOGIN_USER } from "../constans";
import axios from "axios";

const LoginUser = (dataUser, booleanLogin, booleanRedirect) => ({
  type: LOGIN_USER,
  data: { dataUser, failRegister: booleanLogin, redirect: booleanRedirect },
});

export const loginUser = (email, password) => (dispatch) => {
  axios
    .post("/api/users/login", { email, password })
    .then((resp) => {
      console.log("LA RESPUESTA ES:", resp);
      if (resp.request.status == 200) {
        dispatch(LoginUser(resp.data, false, true));
      }
      if (resp.request.status == 401) {
        dispatch(LoginUser({}, true));
      }
    })
    .catch((err) => {
      dispatch(LoginUser({}, true));
    });
};
