import React from 'react'
import connect from 'react-redux'
import Input from '../componets/Input'
import Products from '../componets/Product'
import { giveMeProducts } from '../store/actions/Products'

class ProductsContainer extends React.Component{
    constructor(){
        super();
        this.state = {
          search = ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({ search:event.target.value })
    }
    
    handleSubmit(event){
        event.preventDefault();
        this.props.giveMeProducts(this.state.search)
    }

    render(){
        return(
            <>
            <Input
            handleChange = {this.handleChange}
             valueSearch={this.state.search}            
            />
            <Products products = {this.props.products}/>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps)=>({

 products: state.products.products

})

const mapStateToDispatch = (dispatch, ownProps)=>({

  giveMeProducts: (products)=> dispatch(giveMeProducts(products))
})

export default connect(mapStateToProps, mapStateToDispatch)(ProductsContainer)