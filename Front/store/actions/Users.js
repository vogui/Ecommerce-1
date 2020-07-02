import { GET_USERS } from "../constans";
import axios from "axios";

const listUsers = (list) => ({
  type: GET_USERS,
  list,
});

export const fetchUsers = () => (dispatch) => {
  return axios
    .get("/api/users")
    .then((lista) => dispatch(listUsers(lista.data)));
};

export const deleteUser = (idUser) => (dispatch) => {
  return axios
    .delete(`/api/users/${idUser}`)
    .then(() => dispatch(fetchUsers()));
};

export const promoteAdmin = (idUser) => (dispatch) => {
  return axios
    .post("/api/users/promoteAdmin", {
      secret: "UpgradeToAdmin",
      idUser: idUser,
    })
    .then(() => {
      dispatch(fetchUsers());
    });
};
