import { SET_REVIEW } from "../constans";
import { BRING_REVIEW } from "../constans";
import axios from "axios";

const setReview = (data) => ({
  type: SET_REVIEW,
  data,
});

const findReview = (reviews) => ({
  type: BRING_REVIEW,
  reviews,
});

export const BringMeReviews = (ProductId) => (dispatch) => {
  axios.get(`/api/reviews/${ProductId}`).then((ReviewList) => {
    dispatch(findReview(ReviewList.data));
  });
};

export const setearReview = ({
  idUser,
  idProduct,
  ratingUser,
  commentUser,
}) => (dispatch) => {
  Promise.all([
    setReview({
      idUser,
      idProduct,
      ratingUser,
      commentUser,
    }),
    ,
    axios.post(`/api/reviews/${idProduct}`, {
      idUser,
      ratingUser,
      commentUser,
    }),
  ]).then(() => {
    dispatch(BringMeReviews(idProduct));
  });
};
