import { LOGIN_USER } from "../constans";
import axios from "axios";

const LoginUser = (dataUser, booleanLogin) => ({
  type: LOGIN_USER,
  data: { dataUser, failLogin: booleanLogin },
});

export const loginUser = (email, password) => (dispatch) => {
  axios
    .post("/api/users/login", { email, password })
    .then((resp) => {
      console.log("LA RESPUESTA ES:", resp);
      if (resp.request.status == 200) {
        dispatch(LoginUser(resp.data));
      }
    })
    .catch((err) => {
      dispatch(LoginUser({}, true));
    });
};
