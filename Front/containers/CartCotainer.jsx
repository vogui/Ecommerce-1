import React from 'react'
import connect from 'react-redux'
import Products from '../componets/Product'


class CartContainer extends React.Component{
    constructor(){
        super();
        this.state = {
        }
    }

    render(){
        return(
            <div>Carrito</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        //items: store.addedItems
    }
}

const mapStateToDispatch = (dispatch, ownProps) => {
    return {}
}

export default connect(mapStateToProps, mapStateToDispatch)(CartContainer)