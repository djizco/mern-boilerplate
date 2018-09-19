import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import { validatePassword } from '_utils/validation';
import ChangePassword from './ChangePassword';

export default class ChangePasswordContainer extends Component {
  static propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string,
    }).isRequired,
    attemptUpdatePassword: PropTypes.func.isRequired,
  };

  state = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    message: '',
    valid: false,
  }

  updateOldPassword = e => this.setState({ oldPassword: e.target.value })

  updateNewPassword = e => {
    this.setState({ newPassword: e.target.value });
    this.validatePassword(this.props.user.username, e.target.value);
  }

  updateConfirmPassword = e => this.setState({ confirmPassword: e.target.value })

  validatePassword = (username, password) => {
    const { valid, message } = validatePassword(username, password);

    this.setState({ valid, message });
  }

  save = () => {
    const { valid, oldPassword, newPassword, confirmPassword } = this.state;
    if (valid && newPassword === confirmPassword && oldPassword) {
      this.props.attemptUpdatePassword({ oldPassword, newPassword })
        .then(() => this.setState({
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
          message: '',
          valid: false,
        }))
        .catch(R.identity);
    }
  }

  render() {
    const { oldPassword, newPassword, confirmPassword, message, valid } = this.state;
    return (
      <ChangePassword
        oldPassword={oldPassword}
        newPassword={newPassword}
        message={message}
        valid={valid}
        confirmPassword={confirmPassword}
        updateOldPassword={this.updateOldPassword}
        updateNewPassword={this.updateNewPassword}
        updateConfirmPassword={this.updateConfirmPassword}
        save={this.save}
      />
    );
  }
}
