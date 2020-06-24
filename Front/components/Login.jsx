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
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const mapStateToProps = (state, ownProps) => {
  {
    console.log("OWNProps:", ownProps);
  }
  return {
    login: state.login,
  };
};
const mapDispatchToProps = { loginUser };

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.submitInfo = this.submitInfo.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  submitInfo(e) {
    e.preventDefault();
    this.props.loginUser(this.state.email, this.state.password).then(() => {
      this.setState({ email: "", password: "" });
    });
  }

  changeEmail(e) {
    this.setState({ email: e.target.value });
  }

  changePassword(e) {
    this.setState({ password: e.target.value });
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
                      value={this.state.email}
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
                      value={this.state.password}
                      autoComplete="current-password"
                      variant="outlined"
                      onChange={this.changePassword}
                    />
                  </Grid>
                </Grid>
              </form>
            </Grid>

            <Grid item xs={12}>
              {this.props.login.data.failLogin ? (
                <Button
                  variant="contained"
                  color="secondary"
                  endIcon={<ErrorOutlineIcon></ErrorOutlineIcon>}
                  className="buttonInput"
                  type="submit"
                  form="form-register"
                  label="Submit"
                >
                  Not valid data
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<Icon>send</Icon>}
                  className="buttonInput"
                  type="submit"
                  form="form-register"
                  label="Submit"
                >
                  Sing In
                </Button>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
