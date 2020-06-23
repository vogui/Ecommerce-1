import { TRAE_PRODUCTS, TRAE_PRODUCT } from '../constans'

const initialState = {
    product:{},
    products:[]
   }

 export default function reducer (state = initialState, action){
    switch (action.type){
        case TRAE_PRODUCTS :
         return {...state, products:action.products};
        case TRAE_PRODUCT :
            return {...state, product:action.product}
       default: 
       return state
 }
}