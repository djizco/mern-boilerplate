import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import SettingsPage from './SettingsPage';

export default class SettingsPageContainer extends Component {
  static propTypes = {
    user: PropTypes.shape({}).isRequired,
    pushToLogin: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    const { user, pushToLogin } = this.props;
    if (R.isEmpty(user)) {
      pushToLogin();
    }
  }

  render() {
    return (
      <SettingsPage location={this.props.location} />
    );
  }
}
