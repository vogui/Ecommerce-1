import { TRAE_CATEGORY, SET_CATEGORY } from "../constans";
import axios from "axios";
import { giveMeProducts } from "../actions/Products";
const findCate = (categorys) => ({
  type: TRAE_CATEGORY,
  categorys,
});

const actualCategory = (oneCategory) => ({
  type: SET_CATEGORY,
  oneCategory,
});

export const findCategorys = () => (dispatch) => {
  return axios
    .get("/api/categorys")
    .then((categorysFound) => dispatch(findCate(categorysFound.data)));
};

export const setCategory = (selectedCategory) => (dispatch) => {
  console.log("En el action es:", selectedCategory);
  return dispatch(giveMeProducts({ title: "", id: selectedCategory }));
};
