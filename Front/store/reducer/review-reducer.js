import { BRING_REVIEW } from '../constans'

const intialState = {
    reviews: []
}

export default function reducer (state = intialState, action){
    switch(action.type){
        case BRING_REVIEW:
            return {...state, reviews:action.reviews}

      default:
          return state      
    }
    
    
}