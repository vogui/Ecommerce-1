import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { registerUser } from "../store/actions/Register";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { Redirect } from "react-router-dom";
const mapStateToProps = (state, ownProps) => {
  return {
    register: state.register.data,
  };
};
const mapDispatchToProps = { registerUser };

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      name: "",
      adress: "",
    };
    this.submitInfo = this.submitInfo.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeAdress = this.changeAdress.bind(this);
  }

  submitInfo(e) {
    e.preventDefault();
    this.props.registerUser(
      this.state.email,
      this.state.password,
      this.state.username,
      this.state.name,
      this.state.adress
    );
  }

  changeEmail(e) {
    this.setState({ email: e.target.value });
  }

  changePassword(e) {
    this.setState({ password: e.target.value });
  }

  changeUsername(e) {
    this.setState({ username: e.target.value });
  }
  changeName(e) {
    this.setState({ name: e.target.value });
  }
  changeAdress(e) {
    this.setState({ adress: e.target.value });
  }

  render() {
    if (this.props.register.redirect) {
      return <Redirect push to="/login" />;
    }
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
              <h2>Register</h2>
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
                  spacing={3}
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

                  <Grid item xs>
                    <TextField
                      required
                      id="outlined-required"
                      label="username"
                      type="text"
                      name="username"
                      variant="outlined"
                      onChange={this.changeUsername}
                    />
                  </Grid>
                </Grid>

                <Grid
                  style={{ marginTop: "15px" }}
                  container
                  spacing={2}
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs>
                    <TextField
                      required
                      label="name"
                      type="text"
                      name="name"
                      value={this.state.name}
                      variant="outlined"
                      onChange={this.changeName}
                    />
                  </Grid>

                  <Grid item xs>
                    <TextField
                      required
                      label="adress"
                      type="text"
                      name="adress"
                      value={this.state.adress}
                      variant="outlined"
                      onChange={this.changeAdress}
                    />
                  </Grid>
                </Grid>
              </form>
            </Grid>

            <Grid item xs={12}>
              {this.props.register.failRegister ? (
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
                  Sing Up
                </Button>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
