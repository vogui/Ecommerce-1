import React from "react";
import { connect } from "react-redux";
import NavBarAdmin from "../components/NavBarAdmin";
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
    };
    this.selectedItem = this.selectedItem.bind(this);
  }

  selectedItem(item) {
    this.setState({ selected: item });
  }
  render() {
    return (
      <div>
        <NavBarAdmin props={this.props} selected={this.selectedItem} />
        {this.state.selected == "products" ? <h1>Productos</h1> : null}
        {this.state.selected == "categories" ? <h1>Categorias</h1> : null}
        {this.state.selected == "users" ? <h1>users</h1> : null}
        {this.state.selected == "orders" ? <h1>orders</h1> : null}{" "}
        {/*Esto lo vemos despues*/}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login.data,
    products: state.products.products,
    items: state.products.addedItems,
    isAdmin: state.login.data.dataUser.isAdmin,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
