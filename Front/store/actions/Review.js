import { SET_REVIEW } from "../constans";
import { BRING_REVIEW } from '../constans'
import axios from 'axios'

const dataReview = (data) => ({
  type: SET_REVIEW,
  data,
});

const findReview = (reviews)=>({
 type: BRING_REVIEW,
 reviews
})

export const BringMeReviews = (ProductId)=> dispatch =>{
    axios.get(`/api/reviews/${ProductId}`).then((ReviewList)=>{
     dispatch(findReview(ReviewList.data))
    })
}

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

