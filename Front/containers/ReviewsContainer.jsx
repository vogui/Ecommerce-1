import React from "react";
import { connect } from "react-redux";
import InputReview from "../components/InputReview";
import ListaDeReviews from "../components/ListaDeReviews";
import { BringMeReviews, setearReview } from "../store/actions/Review";

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.productId,
    user: state.login.data.dataUser,
    isLogged: state.login.data.redirect,
    productId: state.products.product.id,
    reviews: state.reviews.reviews,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  BringMeReviews: (id) => dispatch(BringMeReviews(id)),
  setearReview: (data) => dispatch(setearReview(data)),
});

class ReviewsContainer extends React.Component {
  componentDidMount() {
    this.props.BringMeReviews(this.props.id);
  }

  render() {
    return (
      <div>
        {this.props.isLogged ? (
          <InputReview
            setearReview={this.props.setearReview}
            idProduct={this.props.productId}
            dataUser={this.props.user}
          />
        ) : null}
        {this.props.reviews.length > 0 ? (
          <ListaDeReviews reviews={this.props.reviews} />
        ) : null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
