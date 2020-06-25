import {TRAE_CATEGORY} from '../constans'

const initialState = {
    categorys:[],
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case TRAE_CATEGORY:
        return { ...state, categorys: action.categorys };
      default:
        return state;
    }
  }