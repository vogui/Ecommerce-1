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

export function setCategory(selectedCategory) {
  return (dispatch) => {
    dispatch(actualCategory(selectedCategory));
    setTimeout(() => {
      //Me aseguro que el dispatch anterior realmente surga efecto
      dispatch(giveMeProducts({ title: "", id: selectedCategory }));
    }, 500);
  };
}
