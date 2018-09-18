import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import LoginPage from './LoginPage';

export default class LoginPageContainer extends Component {
  static propTypes = {
    user: PropTypes.shape({}).isRequired,
    pushToHome: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { user, pushToHome } = this.props;
    if (!R.isEmpty(user)) {
      pushToHome();
    }
  }

  render() {
    return (
      <LoginPage />
    );
  }
}
