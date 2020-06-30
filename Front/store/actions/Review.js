import { BRING_REVIEW } from '../constans'
import axios from 'axios'

const findReview = (reviews)=>({
 type: BRING_REVIEW,
 reviews
})

export const BringMeReviews = (ProductId)=> dispatch =>{
    axios.get(`/api/reviews/${ProductId}`).then((ReviewList)=>{
     dispatch(findReview(ReviewList.data))
    })
}