import React from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import { giveTheProduct } from "../store/actions/Products";

class ProductContainer extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log(this.props.id, 'ID')
    this.props.giveTheProduct(this.props.id);
  }
  render() {
    return <Product product={this.props.product} />;
  }
}

const mapStateToProps = function (state, ownProps) {
  console.log(ownProps.match.params.id,)
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
