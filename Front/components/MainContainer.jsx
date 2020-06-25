import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { connect } from "react-redux";
import ProductosMain from "../components/ProductosMain";
import { giveMeAllProducts } from "../store/actions/Products";
const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login.data,
    products: state.products.products,
  };
};
const mapStateToDispatch = (dispatch, ownProps) => ({
  giveMeAllProducts: () => dispatch(giveMeAllProducts()),
});

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.giveMeAllProducts();
  }

  render() {
    return (
      <div>
        <NavBar props={this.props}></NavBar>
        <br></br>
        <Link to="/cart">Cart</Link>
        <ProductosMain tileData={this.props.products}></ProductosMain>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapStateToDispatch)(MainContainer);
