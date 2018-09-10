import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import ChangeUsername from './ChangeUsername';

export default class ChangeUsernameContainer extends Component {
  static propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string,
      usernameCase: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,
    attemptUpdateUser: PropTypes.func.isRequired,
  };

  state = {
    usernameCase: this.props.user.usernameCase,
  }

  componentWillReceiveProps(nextProps) {
    if (!R.isEmpty(nextProps.user) && !R.equals(nextProps.user, this.props.user)) {
      this.setState({
        usernameCase: nextProps.user.usernameCase,
      });
    }
  }

  updateUsernameCase = e => this.setState({ usernameCase: e.target.value })

  saveUsernameCase = () => {
    if (this.state.usernameCase.toLowerCase() === this.props.user.username) {
      const updatedUser = { username_case: this.state.usernameCase };

      this.props.attemptUpdateUser(updatedUser)
        .catch(() => this.setState({ usernameCase: this.props.user.usernameCase }));
    }
  }

  isDisabled = () => this.props.user.usernameCase === this.state.usernameCase
    || this.state.usernameCase.toLowerCase() !== this.props.user.username

  render() {
    const { usernameCase } = this.state;
    return (
      <ChangeUsername
        disabled={this.isDisabled()}
        username={this.props.user.username}
        usernameCase={usernameCase}
        currentUsernameCase={this.props.user.usernameCase}
        updateUsernameCase={this.updateUsernameCase}
        saveUsernameCase={this.saveUsernameCase}
      />
    );
  }
}
