import { BRING_REVIEW } from "../constans";
import { SET_REVIEW } from "../constans";

const intialState = {
  reviews: [],
  data: {},
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case BRING_REVIEW:
      return { ...state, reviews: action.reviews };
    case SET_REVIEW:
      return { ...state, data: action.data };
    default:
      return state;
  }
}
