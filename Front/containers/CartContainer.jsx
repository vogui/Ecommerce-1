import React from "react";
import { connect } from "react-redux";
import Cart from '../components/Cart';
import { removeItem, addQuantity, subtractQuantity } from "../store/actions/Products";

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}


class CartContainer extends React.Component {

    //to remove the item completely
    handleRemove(id){
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity(id){
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity(id){
        this.props.subtractQuantity(id);
    }

    render() {
        return <Cart add={this.handleAddQuantity} rest={this.handleSubtractQuantity} remove={this.handleRemove} items={this.props.items}/>
    }
}

export default connect(mapStateToProps)(CartContainer);