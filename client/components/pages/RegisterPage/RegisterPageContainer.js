import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import RegisterPage from './RegisterPage';

export default class RegisterPageContainer extends Component {
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
      <RegisterPage />
    );
  }
}
