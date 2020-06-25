import React from "react";
import { connect } from "react-redux";
import Input from "../components/Input";
import Products from "../components/Products";
import { giveMeProducts } from "../store/actions/Products";

class ProductsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
    this.handleChange = this.handleChange.bind(this);
  
  }

  handleChange(event) {
    const title = event.target.value
    this.props.giveMeProducts( {title} );
  }

 

  render() {
    return (
     <div>
       <Input
          
          handleChange={this.handleChange}
        
        />
         
        <Products products={this.props.products} /> 
       
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  products: state.products.products,
});

const mapStateToDispatch = (dispatch, ownProps) => ({
  giveMeProducts: (products) => dispatch(giveMeProducts(products)),
});

export default connect(mapStateToProps, mapStateToDispatch)(ProductsContainer);
