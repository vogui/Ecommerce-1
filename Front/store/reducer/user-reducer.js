import { GET_USERS } from "../constans";

const intialState = {
  users: [],
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.list };
    default:
      return state;
  }
}
