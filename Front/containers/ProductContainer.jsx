import React from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import { giveTheProduct } from "../store/actions/Products";

class ProductContainer extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.giveTheProduct(this.props.id);
  }
  render() {
    return <Product product={this.props.product} />;
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    product: state.products.product,
    id: ownProps.match.params.id,
  };
};

const mapStateToDispatch = function (dispatch, ownProps) {
  ownProps;
  return {
    giveTheProduct: (id) => {
      dispatch(giveTheProduct(id));
    },
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(ProductContainer);
