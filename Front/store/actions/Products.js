import {
  TRAE_PRODUCTS,
  TRAE_PRODUCT,
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  CHECKOUT,
  GET_ORDERS
} from "../constans";
import axios from "axios";

const findProducts = (products) => ({
  type: TRAE_PRODUCTS,
  products,
});

const findProduct = (product) => ({
  type: TRAE_PRODUCT,
  product,
});

const findProductsByCate = (products)=>({
  type: BRING_PRODUCT_BY_CATE,
  products,
});

export const addToCart = (id)=>{
  return {
  type: ADD_TO_CART,
  id,
 } 
};

export const subtractQuantity = (id)=>{
  return { type: SUB_QUANTITY,
  id,
  }
};

export const addQuantity = (id)=>{
  return { type: ADD_QUANTITY,
  id,
  }
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};

const checkOutCart = (obj) => ({
  type: CHECKOUT,
  obj,
});

const findOrders = (orders) => ({
  type: CHECKOUT,
  orders,
});

export const findProductsByCategory =(categoryId)=> dispatch =>{
  axios.get(`/api/products/categorys/${categoryId}`)
  .then((listProductsByCate) => dispatch(findProductsByCate(listProductsByCate)))
}

export const giveMeProducts = (products)=> dispatch =>{
    axios.post("/api/products", products)
    .then((listProducts)=> {
    dispatch(findProducts(listProducts.data))})
}

export const giveTheProduct = (productId) => (dispatch) => {
  axios
    .get(`/api/products/${productId}`)
    .then((product) => dispatch(findProduct(product.data)));
};

export const giveMeAllProducts = () => (dispatch) => {
  axios
    .get("/api/products/")
    .then((products) => dispatch(findProducts(products.data)));
};

export const addToCartBack = (obj) => () => {
  axios.post("/api/cart", obj)
};

export const checkOut = (id) => (dispatch) => {
  axios.put("/api/cart", id)
  .then((res) => {
    let objVaciarCart ={}
    dispatch(checkOutCart(objVaciarCart))});
};

export const getLastOrders = (userId)=> dispatch =>{
    axios.get("/api/cart", userId)
    .then((ordersList)=> {
    dispatch(findOrders(ordersList.data))})
}
