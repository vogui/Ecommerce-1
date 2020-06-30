import { SET_REVIEW } from "../constans";

const initialState = {
  data: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_REVIEW:
      return { ...state, data: action.data };
    default:
      return state;
  }
}
