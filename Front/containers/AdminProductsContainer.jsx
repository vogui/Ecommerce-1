import React from 'react'
import { connect } from 'react-redux'
import AdminProducts from '../components/AdmiProducts'
import Products from '../components/Products'
import { setCategory, findCategorys } from "../store/actions/Category";
import { creatingProduct, deletingProduct, /* findProductByTitle */ } from "../store/actions/Products"

const mapStateToProps = function (state, ownProps) {

    return {
        categorys: state.categorys.categorys,
        products: state.products.products
  };
}
  
  const mapDispatchToProps = function (dispatch, ownProps) {
    
    return {

      findCategorys: () => dispatch(findCategorys()),
      setCategory: (id) => dispatch(setCategory(id)),
      creatingProduct: (body) => dispatch(creatingProduct(body)),
      deletingProduct: (body) => dispatch(deletingProduct(body)),
      findProductByTitle: (body) => dispatch(findProductByTitle(body))

      }
    };
 
class AdminProductsContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
           urlImageValue:'',
           categoryId: '',
           priceValue: null,
           nameValue: '',
           id:null,
        };
        this.setCategoryState = this.setCategoryState.bind(this);
        this.setUrl =  this.setUrl.bind(this);
        this.setPrice = this.setPrice.bind(this);
        this.setName =  this.setName.bind(this);
        this.setId =  this.setId.bind(this); 
        this.handleSubmitCreate = this.handleSubmitCreate.bind(this);
       this.handleSubmitDelete = this.handleSubmitDelete.bind(this)
 
       /* this.handleChange = this.handleChange.bind(this) */
      }
    componentDidMount() {
        this.props.findCategorys();
      }

    setUrl(event){ 
        let value = event.target.value
        this.setState({urlImageValue: value})
    }
    setPrice(event){
        let value = event.target.value
        this.setState({priceValue: value})
    }
    setName(event){
        let value = event.target.value
        this.setState({nameValue:  value})
    }
     setId(event){
        let value = event.target.value
        this.setState({nameValue2:  value})
    } 
 
    setCategoryState(value) {
        this.setState({
          categoryId: value,
        });
      } 
  /*     handleChange(event) {
        const title = event.target.value;
        
        this.props.findProductByTitle(title)
    } */


    handleSubmitCreate(event){
        event.preventDefault()
        this.props.creatingProduct({
            title: this.state.nameValue,
            picture: this.state.urlImageValue,
            price: this.state.priceValue,
            categoryId: this.state.categoryId,
        })
    }
    
  handleSubmitDelete(event){
        event.preventDefault()
        console.log(this.state.id)

        this.props.deletingProduct({id:this.state.id})
    }

    render(){
        return(
            <>
            <AdminProducts
             setUrl = {this.setUrl}
             setPrice = {this.setPrice}
             setName = {this.setName}
             setId = {this.setName2}
             setCategoryState = {this.setCategoryState}
             valueUrl = {this.state.urlImageValue}
             valueName = {this.state.nameValue}
             valueId = {this.state.id}
             valuePrice = {this.state.priceValue}
             handleChange = {this.handleChange}
             handleCategorys = {this.props.categorys}
             handleSubmitCreate= {this.handleSubmitCreate}
             handleSubmitDelete = {this.handleSubmitDelete}
            />
           {/*  <Products products={this.props.products} /> */}
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductsContainer);