import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import Navigation from './Navigation';

export default class NavigationContainer extends Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
  };

  state = {
    auth: !R.isEmpty(this.props.user),
    dropdownOpen: false,
    opening: false,
  }

  componentWillReceiveProps(nextProps) {
    if (!R.equals(nextProps.user, this.props.user)) {
      this.setState({ auth: !R.isEmpty(nextProps.user) });
    }
  }

  toggleDropdown = () => this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen, opening: true }))

  closeDropdown = () => this.state.opening ?
    this.setState({ opening: false }) :
    this.setState({ dropdownOpen: false })

  render() {
    const { auth, dropdownOpen } = this.state;
    const { pathname, user } = this.props;

    return (
      <Navigation
        user={user}
        auth={auth}
        pathname={pathname}
        userDropdownOpen={dropdownOpen}
        toggleUserDropdown={this.toggleDropdown}
        closeUserDropdown={this.closeDropdown} />
    );
  }
}
