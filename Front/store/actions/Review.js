import { SET_REVIEW } from "../constans";
import axios from "axios";

const dataReview = (data) => ({
  type: SET_REVIEW,
  data,
});

export const setearReview = ({
  idUser,
  idProduct,
  ratingUser,
  commentUser,
}) => {
  axios
    .post(`/api/reviews/${idProduct}`, { idUser, ratingUser, commentUser })
    .then((listaReviews) => {
      console.log("Lista reviews:", listaReviews);
    });
};
