import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
class MainContainer extends React.Component {
  render() {
    return (
      <div>

        <Link to="/login">Go to login</Link>
        <br></br>
        <Link to="/register">Go to register</Link>
        <br></br>
        <Link to="/cart">Go to cart</Link>

      </div>
    );
  }
}
export default MainContainer;
