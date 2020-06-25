import { TRAE_PRODUCTS, TRAE_PRODUCT, ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY } from '../constans'
  
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
            };

        case REMOVE_ITEM:

            let itemToRemove= state.addedItems.find(item=> action.id === item.id)
            let new_items = state.addedItems.filter(item=> action.id !== item.id)
            
            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
            console.log("Estoy por remover : ",itemToRemove)
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            };

        case ADD_QUANTITY:

            let itemToAdd = state.products.find(item=> item.id === action.id)
            itemToAdd.quantity += 1 
            let newTotal2 = state.total + itemToAdd.price
            return{
              ...state,
              total: newTotal2
            };

        case SUB_QUANTITY:

            let itemToAdd2 = state.products.find(item=> item.id === action.id) 
            //if the qt == 0 then it should be removed
            if(itemToAdd2.quantity === 1){
                let new_items = state.addedItems.filter(item=>item.id !== action.id)
                let newTotal3 = state.total - itemToAdd2.price
                return{
                    ...state,
                    addedItems: new_items,
                    total: newTotal3
                }
              }
            else {
                itemToAdd2.quantity -= 1
                let newTotal3 = state.total - itemToAdd2.price
                return{
                      ...state,
                      total: newTotal3
                }
            };

         default: return state;
    }
}