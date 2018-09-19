import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import Login from './Login';

export default class LoginContainer extends Component {
  static propTypes = {
    attemptLogin: PropTypes.func.isRequired,
  };

  state = {
    remember: false,
    username: '',
    password: '',
  }

  componentWillMount() {
    const username = localStorage.getItem('username');
    if (username) {
      this.setState({ remember: true, username });
    }
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.login();
    }
  }

  login = () => {
    const { username, password, remember } = this.state;
    const userCredentials = { username, password };

    if (remember) { localStorage.setItem('username', this.state.username); }

    this.props.attemptLogin(userCredentials)
      .catch(R.identity);
  }

  rememberMe = () => {
    localStorage.removeItem('username');
    this.setState(prevState => ({ remember: !prevState.remember }));
  }

  updateUsername = username => this.setState({ username })

  updatePassword = password => this.setState({ password })

  render() {
    const { remember, username, password } = this.state;

    return (
      <Login
        remember={remember}
        username={username}
        password={password}
        updateUsername={this.updateUsername}
        updatePassword={this.updatePassword}
        rememberMe={this.rememberMe}
        login={this.login}
      />
    );
  }
}
