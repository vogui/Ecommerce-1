import { LOGIN_USER } from "../constans";
import axios from "axios";

const LoginUser = (dataUser, booleanLogin) => ({
  type: LOGIN_USER,
  data: { dataUser, failLogin: booleanLogin },
});

export const loginUser = (username, password) => (dispatch) => {
  axios
    .post("api/users/login", { username, password })
    .then((resp) => {
      if (resp.request.status == 200) {
        dispatch(LoginUser(resp.data));
      }
    })
    .catch((err) => {
      dispatch(LoginUser({}, true));
    });
};
