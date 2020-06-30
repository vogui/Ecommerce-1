import React from "react";
import { connect } from "react-redux";
import InputReview from "../components/InputReview";
import ListaDeReviews from "../components/ListaDeReviews";
const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products.product.id,
    user: state.login.data.dataUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

class ReviewsContainer extends React.Component {
  render() {
    return (
      <div>
        <p>HOla estas en reviews</p>
        <InputReview
          idProduct={this.props.product}
          dataUser={this.props.user}
        />
        {/*<ListaDeReviews /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
