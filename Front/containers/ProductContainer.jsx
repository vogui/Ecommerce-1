import React from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import { giveTheProduct } from "../store/actions/Products";
import ReviewsContainer from "../containers/ReviewsContainer";
class ProductContainer extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log(this.props.id, "ID");
    this.props.giveTheProduct(this.props.id);
  }

  /*   handleClick = (id) => {
    this.props.addToCart(id);
  }; */
  render() {
    return (
      <>
        <Product product={this.props.product} props={this.props} />
        <ReviewsContainer />
      </>
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  console.log(ownProps.match.params.id);
  return {
    product: state.products.product,
    id: ownProps.match.params.id,
    login: state.login.data,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  ownProps;
  return {
    giveTheProduct: (id) => {
      dispatch(giveTheProduct(id));
    },
    /*  addToCart: (id) => {
      dispatch(addToCart(id));
    }, */
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
