import { LOGIN_USER } from "../constans";

const initialState = {
  data: { dataUser: {}, failLogin: false },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, data: action.data };
    default:
      return state;
  }
}
