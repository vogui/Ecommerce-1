import React from "react";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../store/actions/Login";

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data,
  };
};
const mapStateToDispatch = { loginUser };

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
      wrongData: false,
    };
    this.submitInfo = this.submitInfo.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  submitInfo(e) {
    e.preventDefault();
    this.props.loginUser(this.state.email, this.state.password);
  }

  changeEmail(e) {
    console.log(e.target.value);
    this.setState({ email: e.target.value, wrongData: false });
  }

  changePassword(e) {
    console.log(e.target.value);
    this.setState({ password: e.target.value, wrongData: false });
  }

  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <h2>Login</h2>
            </Grid>
            <Grid item xs={12}>
              <form
                autoComplete="off"
                className="loginContainer"
                action="/api/users/register"
                method="POST"
                id="form-register"
                onSubmit={(e) => {
                  this.submitInfo(e);
                }}
              >
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs>
                    <TextField
                      required
                      id="outlined-required"
                      label="email"
                      name="email"
                      variant="outlined"
                      onChange={this.changeEmail}
                    />
                  </Grid>

                  <Grid item xs>
                    <TextField
                      required
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      variant="outlined"
                      onChange={this.changePassword}
                    />
                  </Grid>
                </Grid>
              </form>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<Icon>send</Icon>}
                className="buttonInput"
                type="submit"
                form="form-register"
                label="Submit"
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Login);
