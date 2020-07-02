import {
  TRAE_PRODUCTS,
  TRAE_PRODUCT,
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  TRAE_PRODUCTS_BY_TITLE
} from "../constans";
import axios from "axios";
import { setCategory } from "../actions/Category";

const findProducts = (products) => ({
  type: TRAE_PRODUCTS,
  products,
});
const findTitle = (titleProducts) => ({
  type: TRAE_PRODUCTS_BY_TITLE,
  titleProducts,
});

const findProduct = (product) => ({
  type: TRAE_PRODUCT,
  product,
});


//axios


export const giveMeProducts = ({ title, id }) => (dispatch) => {
  console.log("Title y selectedCategory:", title, id);
  axios.post("/api/products", { title, id }).then((listProducts) => {
    console.log("Los productos son:", listProducts);
    dispatch(findProducts(listProducts.data));
    setCategory(id);
  });
};

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

export const creatingProduct = (info)=> dispatch => {
 
  axios.post('/api/products/create', info)
}

/* export const findProductByTitle = (title) => dispatch =>{
  console.log('title ---->', title)
  axios.get(`/api/products/${title}`)
  .then((products) => {
    console.log('products ---->', products)
    dispatch(findTitle(products.data))}) }*/
  

export const deletingProduct = (info) => (dispatch) =>{
  console.log(info.title)
   axios
  .delete("/api/products/delete", ({
    headers: {
      Authorization: "algoaca",
    },
    data: {
      source: info.title,
    },
  }))
}
 

//actions
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};
//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
