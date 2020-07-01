import React from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
  checkOut
} from "../store/actions/Products";

const mapStateToProps = (state) => {
  return {
    login: state.login.data,
    items: state.products.addedItems,
    total: state.products.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
    checkout: (id) => {
      dispatch(checkOut(id));
    }
  };
};

class CartContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleRemove = this.handleRemove.bind(this);
    this.handleAddQuantity = this.handleAddQuantity.bind(this);
    this.handleSubtractQuantity = this.handleSubtractQuantity.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }
  //to remove the item completely
  handleRemove(id) {
    this.props.removeItem(id);
  }
  //to add the quantity
  handleAddQuantity(id) {
    this.props.addQuantity(id);
  }
  //to substruct from the quantity
  handleSubtractQuantity(id) {
    this.props.subtractQuantity(id);
  }

  handleCheckout(userId){
    this.props.checkout(userId)
  }


  render() {
    
    return (
      <Cart
        total={this.props.total}
        add={this.handleAddQuantity}
        rest={this.handleSubtractQuantity}
        remove={this.handleRemove}
        items={this.props.items}
        user={this.props.login.dataUser.id}
        props={this.props}
        checkout={this.handleCheckout}
        lastOrders={this.handleLastOrders}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
