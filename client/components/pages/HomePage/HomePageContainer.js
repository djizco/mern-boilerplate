import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import HomePage from './HomePage';

export default class HomePageContainer extends Component {
  static propTypes = {
    user: PropTypes.shape({}).isRequired,
    pushToLogin: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { user, pushToLogin } = this.props;
    if (R.isEmpty(user)) {
      pushToLogin();
    }
  }

  render() {
    return (
      <HomePage />
    );
  }
}
