import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import axios from 'axios';

class SignupForm extends React.Component {
  state = {
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    confirmPassword: "",
    confirmPasswordError: ""
  };

  getEmailError = email => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValidEmail = emailRegex.test(email);
    return !isValidEmail ? "Invalid email." : "";
  };

  validateEmail = () => {
    const error = this.getEmailError(this.state.email);

    this.setState({ emailError: error });
    return !error;
  };

  getPasswordError = password => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const isValidPassword = passwordRegex.test(password);
    return !isValidPassword
      ? "The password must contain minimum eight characters, at least one letter and one number."
      : "";
  };

  validatePassword = () => {
    const error = this.getPasswordError(this.state.password);

    this.setState({ passwordError: error });
    return !error;
  };

  getConfirmPasswordError = (password, confirmPassword) => {
    const passwordsMatch = password === confirmPassword;

    return !passwordsMatch ? "Passwords don't match." : "";
  };

  validateConfirmPassword = () => {
    const error = this.getConfirmPasswordError(
      this.state.password,
      this.state.confirmPassword
    );

    this.setState({ confirmPasswordError: error });
    return !error;
  };

  onChangeEmail = event =>
    this.setState({
      email: event.target.value
    });

  onChangePassword = event =>
    this.setState({
      password: event.target.value
    });

  onChangeConfirmPassword = event =>
    this.setState({
      confirmPassword: event.target.value
    });

  handleSubmit = () => {
    if (
      !this.validateEmail() ||
      !this.validatePassword() ||
      !this.validateConfirmPassword()
    ) {
      return;
    }

    const data = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post(`https://mywebsite.com/api/signup`, data);
  };

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={4}>
          <TextField
            label="Email"
            value={this.state.email}
            error={!!this.state.emailError}
            helperText={this.state.emailError}
            onChange={this.onChangeEmail}
            margin="normal"
          />

          <TextField
            label="Password"
            value={this.state.password}
            error={!!this.state.passwordError}
            helperText={this.state.passwordError}
            type="password"
            onChange={this.onChangePassword}
            margin="normal"
          />

          <TextField
            label="Confirm Password"
            value={this.state.confirmPassword}
            error={!!this.state.confirmPasswordError}
            helperText={this.state.confirmPasswordError}
            type="password"
            onChange={this.onChangeConfirmPassword}
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
            margin="normal"
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default SignupForm;