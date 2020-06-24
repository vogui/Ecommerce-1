import React from "react";
import { Link } from "react-router-dom";
class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Link to="/login">Go to login</Link>
        <br></br>
        <Link to="/register">Go to register</Link>
        <br></br>
        <Link to="/products"> Go to products</Link>
      </div>
    );
  }
}
export default MainContainer;
