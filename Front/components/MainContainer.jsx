
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login.data,
  };
};
const mapDispatchToProps = {};

class MainContainer extends React.Component {
  render() {
    return (
      <div>

        <NavBar props={this.props}></NavBar>
        <br></br>
        <Link to='/cart'>Cart</Link>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

