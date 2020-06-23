import React from "react";
import { Switch, Route } from "react-router-dom";
import MainContainer from "./Test";
import store from "../store/index";
import Login from "../components/Login";
import Register from "../components/Register";
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
      </Switch>
    );
  }
}

export default Main;
