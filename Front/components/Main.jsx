import React from "react";
import { Switch, Route } from "react-router-dom";
import MainContainer from "./MainContainer";
import store from "../store/index";
import Login from "../components/Login";
import Register from "../components/Register";
import ProductsContainer from "../containers/ProductsContainer";
import ProductContainer from "../containers/ProductContainer";
import CartContainer from "../containers/CartContainer";
import LastOrdersContainer from "../containers/CartContainer";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <MainContainer />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
        <Route path="/products" component={ProductsContainer} />
        <Route path="/product/:id" component={ProductContainer} />
        <Route path="/user/:id/orders" component={LastOrdersContainer} />
        <Route path="/cart" component={CartContainer} />
      </Switch>
    );
  }
}

export default Main;
