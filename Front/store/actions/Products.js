import {
  TRAE_PRODUCTS,
  TRAE_PRODUCT,
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from "../constans";
import axios from "axios";
import { setCategory } from "../actions/Category";
const findProducts = (products) => ({
  type: TRAE_PRODUCTS,
  products,
});

const findProduct = (product) => ({
  type: TRAE_PRODUCT,
  product,
});

const findProductsByCate = (products) => ({
  type: BRING_PRODUCT_BY_CATE,
  products,
});

export const findProductsByCategory = (categoryId) => (dispatch) => {
  axios
    .get(`/api/products/categorys/${categoryId}`)
    .then((listProductsByCate) =>
      dispatch(findProductsByCate(listProductsByCate))
    );
};

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
