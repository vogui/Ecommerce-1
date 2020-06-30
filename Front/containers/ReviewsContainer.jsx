import React from "react";
import { connect } from "react-redux";
import InputReview from "../components/InputReview";
import ListaDeReviews from "../components/ListaDeReviews";
import { BringMeReviews } from '../store/actions/Review'
const mapStateToProps = (state, ownProps) => {
  return {
    productId: state.products.product.id,
    reviews: state.reviews.reviews,     
    
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  BringMeReviews: (id) => dispatch(BringMeReviews(id))
});


class ReviewsContainer extends React.Component {


componentDidMount(){
  this.props.BringMeReviews(this.props.productId)
}
  


  render() {
    return (
      <div>
        <p>HOla estas en reviews</p>
        {/*  <InputReview />*/}
        <ListaDeReviews reviews= {this.props.reviews} /> 
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
