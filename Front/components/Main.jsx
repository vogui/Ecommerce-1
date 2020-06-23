import React from "react";
import { Switch, Route } from "react-router-dom";
import Test from "./Test";
import store from "../store/index";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Test />} />
      </Switch>
    );
  }
}

export default Main;
