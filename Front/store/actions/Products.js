import { TRAE_PRODUCTS , TRAE_PRODUCT} from '../constans'
import axios from 'axios'


const findProducts = (products) => ({
  type: TRAE_PRODUCTS,
  products,
});

const findProduct = (product)=>({
    type:TRAE_PRODUCT,
    product
})


export const giveMeProducts = (products)=> dispatch =>{
    axios.get("/api/products", products)
    .then((listProducts)=> dispatch(findProducts(listProducts.data)))
}

export const giveTheProduct = (productId)=> dispatch =>{
    axios.get(`/api/products/${productId}`)
    .then((product)=> dispatch(findProducts(product.data)))
}

