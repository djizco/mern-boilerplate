import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import WelcomePage from './WelcomePage';

export default class WelcomePageContainer extends Component {
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
      <WelcomePage />
    );
  }
}
