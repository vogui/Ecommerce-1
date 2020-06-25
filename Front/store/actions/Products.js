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

const findProductsByCate = (products)=>({
  type: BRING_PRODUCT_BY_CATE,
  products,
})

export const findProductsByCategory =(categoryId)=> dispatch =>{
  axios.get(`/api/products/categorys/${categoryId}`)
  .then((listProductsByCate) => dispatch(findProductsByCate(listProductsByCate)))
}

export const giveMeProducts = (products)=> dispatch =>{
   
    axios.post("/api/products", products)
    .then((listProducts)=> {
    dispatch(findProducts(listProducts.data))})
}

export const giveTheProduct = (productId)=> dispatch =>{
    axios.get(`/api/products/${productId}`)
    .then((product)=> dispatch(findProduct(product.data)))
}

