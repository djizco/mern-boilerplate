import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { postCheckUsername } from '_api/users';
import { validatePassword, validateUsername } from '_utils/validation';
import Register from './Register';

export default class RegisterPage extends Component {
  static propTypes = {
    attemptRegister: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    usernameMessage: '',
    password: '',
    passwordMessage: '',
    usernameAvailable: false,
    passwordValid: false,
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.register();
    }
  }

  updateUsername = username => {
    this.setState({ username });
    this.validatePassword(username, this.state.password);
  }

  updatePassword = password => this.setState({ password })

  handleUsernameChange = e => {
    this.updateUsername(e.target.value);
    this.validateUsername(e.target.value);
  }

  handlePasswordChange = e => {
    this.updatePassword(e.target.value);
    this.validatePassword(this.state.username, e.target.value);
  }

  validateUsername = username => {
    const { valid, message } = validateUsername(username);

    if (valid) {
      this.setState({ usernameMessage: 'Checking username...', usernameAvailable: false },
        () => postCheckUsername(username)
          .then(res => this.setState({
            usernameAvailable: res.available,
            usernameMessage: res.message,
          }))
          .catch(R.identity));
    } else {
      this.setState({ usernameAvailable: valid, usernameMessage: message });
    }
  }

  validatePassword = (username, password) => {
    const { valid, message } = validatePassword(username, password);

    this.setState({ passwordValid: valid, passwordMessage: message });
  }

  register = () => {
    if (this.state.usernameAvailable && this.state.passwordValid) {
      const newUser = {
        username: this.state.username,
        password: this.state.password,
      };

      this.props.attemptRegister(newUser)
        .catch(R.identity);
    }
  }

  render() {
    const {
      username, usernameMessage, usernameAvailable, password, passwordMessage, passwordValid,
    } = this.state;

    return (
      <Register
        username={username}
        usernameMessage={usernameMessage}
        handleUsernameChange={this.handleUsernameChange}
        password={password}
        passwordMessage={passwordMessage}
        handlePasswordChange={this.handlePasswordChange}
        usernameAvailable={usernameAvailable}
        passwordValid={passwordValid}
        register={this.register}
      />
    );
  }
}
