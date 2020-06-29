import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { connect } from "react-redux";
import ProductosMain from "../components/ProductosMain";
import { giveMeAllProducts } from "../store/actions/Products";
import Carrousel from "./Carrousel";
import { addToCartBack, addQuantityBack, subtractQuantityBack } from "../store/actions/Products";

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login.data,
    products: state.products.products,
    items: state.products.addedItems,
    total: state.products.total
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  giveMeAllProducts: () => dispatch(giveMeAllProducts()),
  addToCart: (itemID, obj) => dispatch(addToCartBack(itemID, obj)),
  addQuantity: (id, obj) => dispatch(addQuantityBack(id, obj)),
  subtractQuantity: (id, obj) => dispatch(subtractQuantityBack(id, obj))
});

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleAddQuantity = this.handleAddQuantity.bind(this);
    this.handleSubtractQuantity = this.handleSubtractQuantity.bind(this);
  }

  componentDidMount() {
    this.props.giveMeAllProducts();
  }

  handleAddToCart(id) {
    let item = this.props.products.find(element => element.id == id)
    let objBackend = {
      quantity: 1,
      price: item.price,
      UserId: this.props.login.dataUser.id, 
      adress: this.props.login.dataUser.adress,
      ProductId: item.id,
      total: this.props.total
    }
    console.log("objetito pal backend: ",objBackend )
    this.props.addToCart(id, objBackend);
  }

  //to add the quantity
  handleAddQuantity(id) {
    let item = this.props.items.find(element => element.id == id)
    console.log("item!!!:", item)
    let objBackend = {
      quantity: item.quantity +1,
      price: item.price,
      UserId: this.props.login.dataUser.id,
      adress: this.props.login.dataUser.adress,
      ProductId: item.id,
      total: this.props.total
    }
    console.log("objetito pal backend: ",objBackend )
    this.props.addQuantity(id, objBackend);
  }
  
  //to substruct from the quantity
  handleSubtractQuantity(id) {
    let item = this.props.items.find(element => element.id == id)
    console.log("item!!!:", item)
    let objBackend = {
      quantity: item.quantity -1,
      price: item.price,
      UserId: this.props.login.dataUser.id,
      adress: this.props.login.dataUser.adress,
      ProductId: item.id,
      total: this.props.total
    }
    console.log("objetito pal backend: ",objBackend )
    this.props.subtractQuantity(id, objBackend);
  }

  render() {
    return (
      <div>
        <NavBar props={this.props}></NavBar>
        <Carrousel />
        <ProductosMain
          user={this.props.login}
          tileData={this.props.products}
          addToCart={this.handleAddToCart}
          items={this.props.items} 
          add={this.handleAddQuantity} 
          rest={this.handleSubtractQuantity}
        ></ProductosMain>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
