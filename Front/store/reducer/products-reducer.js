import { TRAE_PRODUCTS, TRAE_PRODUCT, ADD_TO_CART } from '../constans'

const initialState = {
    product: {},
    products: [],
    addedItems: [],
    total: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case TRAE_PRODUCTS:
            return { ...state, products: action.products };

        case TRAE_PRODUCT:
            return { ...state, product: action.product };

        case ADD_TO_CART:

            //FALTA LA LOGICA PARA EL CASO DE ESTAR MIRANDO 1 SOLO PRODUCTO ("Product")
            
            let addedItem = state.products.find(item => item.id === action.id)
            //check if the action id exists in the addedItems
            let existed_item = state.addedItems.find(item => action.id === item.id)
            
            if (existed_item) {
                addedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + addedItem.price
                }
            } else {
                addedItem.quantity = 1;
                //calculating the total
                let newTotal = state.total + addedItem.price

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }

            }
        default:
            return state
    }
}