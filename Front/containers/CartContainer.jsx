import React from "react";
import { connect } from "react-redux";


class CartContainer extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {

  }
  render() {
      <div>Cart</div>
  }
}

const mapStateToProps = function (state, ownProps) {
  return {};
};

const mapStateToDispatch = function (dispatch, ownProps) {
  return {};
};

export default connect(mapStateToProps, mapStateToDispatch)(CartContainer);
