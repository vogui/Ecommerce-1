import { TRAE_PRODUCTS } from "../constans";

const initialState = {
  product: {},
  products: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TRAE_PRODUCTS:
      return { ...state, products: action.products };
    default:
      return state;
  }
}
