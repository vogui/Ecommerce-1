import React from "react";
import { connect } from "react-redux";
import InputReview from "../components/InputReview";
import ListaDeReviews from "../components/ListaDeReviews";
const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products.product.id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

class ReviewsContainer extends React.Component {
  render() {
    return (
      <div>
        <p>HOla estas en reviews</p>
        {/*  <InputReview />
        <ListaDeReviews /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
