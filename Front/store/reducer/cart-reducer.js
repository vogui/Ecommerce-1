import { ADD_TO_CART, REMOVE_ITEM } from '../constans';

const initialState = {
    addedItems: [],
    total: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [ ...state.addedItems, action.id ]
        default:
            return state;
    }
}