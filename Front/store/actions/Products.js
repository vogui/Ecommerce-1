<<<<<<< HEAD
import { TRAE_PRODUCTS, TRAE_PRODUCT } from "../constans";
import axios from "axios";
=======
import { TRAE_PRODUCTS , TRAE_PRODUCT, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from '../constans'
import axios from 'axios'

>>>>>>> 34d45c7b965506746a8a40809b7cf831b5e7acda

const findProducts = (products) => ({
  type: TRAE_PRODUCTS,
  products,
});

const findProduct = (product) => ({
  type: TRAE_PRODUCT,
  product,
});

export const giveMeProducts = (products) => (dispatch) => {
  axios.post("/api/products", products).then((listProducts) => {
    console.log(listProducts.data);
    dispatch(findProducts(listProducts.data));
  });
};

export const giveTheProduct = (productId) => (dispatch) => {
  axios
    .get(`/api/products/${productId}`)
    .then((product) => dispatch(findProduct(product.data)));
};

<<<<<<< HEAD
export const giveMeAllProducts = () => (dispatch) => {
  axios
    .get("/api/products/")
    .then((products) => dispatch(findProducts(products.data)));
};
=======

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
>>>>>>> 34d45c7b965506746a8a40809b7cf831b5e7acda
