import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { connect } from "react-redux";
import ProductosMain from "../components/ProductosMain";
import { giveMeAllProducts } from "../store/actions/Products";
import { addToCart } from "../store/actions/Products";
const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login.data,
    products: state.products.products,
    items: state.products.addedItems,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  giveMeAllProducts: () => dispatch(giveMeAllProducts()),
  addToCart: (itemID) => dispatch(addToCart(itemID)),
});

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.giveMeAllProducts();
  }

  render() {
    return (
      <div>
        <NavBar props={this.props}></NavBar>

        <ProductosMain
          tileData={this.props.products}
          addToCart={this.props.addToCart}
        ></ProductosMain>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
