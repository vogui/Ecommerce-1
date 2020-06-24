import React from "react";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

class Register extends React.Component {
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
    console.log(e);
    axios
      .post("/users/Login", this.state)
      .then((resp) => {
        if (resp.request.status == 200) {
          this.setState({ redirect: true });
        }
      })
      .catch((err) => {
        this.setState({ email: "", password: "", wrongData: true });
      });
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
              <h2>Register</h2>
            </Grid>
            <Grid item xs={12}>
              <form autoComplete="off" className="loginContainer">
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
                      label="Email"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs>
                    <TextField
                      required
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="outlined"
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
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Register;
