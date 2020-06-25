import React from "react";
import { connect } from "react-redux";
import Input from "../components/Input";
import Products from "../components/Products";
import { giveMeProducts , findProductsByCategory} from "../store/actions/Products";
import {findCategorys } from '../store/actions/Category'

class ProductsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleBringCate = this.handleBringCate.bind(this)
  }
  componentDidMount(){
 this.props.findCategorys()
  }

  handleChange(event) {
    const title = event.target.value
    this.props.giveMeProducts( {title} );
  }

  handleBringCate(id){
    this.props.findProductsByCategory(id)
  }

  

 

  render() {
    return (
     <div>
       <Input
          
          handleChange={this.handleChange}
          handleCategorys = {this.props.categorys}
         // handleBringCate = {this.handleBringCate}
        />
         
        <Products products={this.props.products} /> 
       
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.categorys.categorys)
 return({ 
  products: state.products.products,
  categorys: state.categorys.categorys
 })
};

const mapStateToDispatch = (dispatch, ownProps) => ({
  giveMeProducts: (products) => dispatch(giveMeProducts(products)),
  findCategorys: ()=> dispatch(findCategorys()),
  findProductsByCategory:(id)=> dispatch(findProductsByCategory(id))
});

export default connect(mapStateToProps, mapStateToDispatch)(ProductsContainer);
