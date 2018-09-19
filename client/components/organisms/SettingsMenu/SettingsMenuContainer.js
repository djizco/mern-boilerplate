import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';

import SettingsMenu from './SettingsMenu';

export default class SettingsMenuContainer extends Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    attemptLogout: PropTypes.func.isRequired,
  };

  logout = () => {
    this.props.attemptLogout()
      .catch(R.identity);
  }

  render() {
    return (
      <SettingsMenu
        pathname={this.props.pathname}
        logout={this.logout}
      />
    );
  }
}
