import React from "react";
import { connect } from "react-redux";
import Cart from '../components/Cart';

class CartContainer extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {

  }
  render() {
      <Cart />
  }
}

const mapStateToProps = function (state, ownProps) {
  return {};
};

const mapStateToDispatch = function (dispatch, ownProps) {
  return {};
};

export default connect(mapStateToProps, mapStateToDispatch)(CartContainer);
