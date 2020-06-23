import { TRAE_PRODUCTS } from '../constans'
import axios from 'axios'

const findProducts = (products)=>({
    type:TRAE_PRODUCTS,
    products
})

export const giveMeProducts = ()=> dispatch =>{
    
}