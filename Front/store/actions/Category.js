import {TRAE_CATEGORY, BRING_PRODUCT_BY_CATE} from '../constans'
import axios from 'axios'

const findCate = (categorys)=>({
    type: TRAE_CATEGORY,
    categorys
})

export const findCategorys = () => dispatch =>{
 return ( axios.get('/api/categorys')
 .then(categorysFound => dispatch(findCate(categorysFound.data)))

 )

}