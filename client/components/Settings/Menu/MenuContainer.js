import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';

import Menu from './Menu';

export default class MenuContainer extends Component {
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
      <Menu
        pathname={this.props.pathname}
        logout={this.logout} />
    );
  }
}
