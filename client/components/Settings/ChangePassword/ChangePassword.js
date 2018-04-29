import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classNames from 'classnames';

export default function ChangePassword(props) {
  const { oldPassword, newPassword, confirmPassword, message, valid,
    updateOldPassword, updateNewPassword, updateConfirmPassword, save } = props;

  const match = newPassword === confirmPassword;

  const newPasswordHelpClasses = classNames({
    help: true,
    'is-danger': !valid,
    'is-success': valid,
  });

  const newPasswordIconClasses = classNames({
    fa: true,
    'fa-check': valid,
    'is-success': valid,
    'fa-warning': newPassword && !valid,
    'is-danger': newPassword && !valid,
  });

  const newPasswordInputClasses = classNames({
    input: true,
    'is-success': valid,
    'is-danger': newPassword && !valid,
  });

  const confirmPasswordIconClasses = classNames({
    fa: true,
    'fa-check': confirmPassword && match,
    'is-success': confirmPassword && match,
    'fa-warning': confirmPassword && !match,
    'is-danger': confirmPassword && !match,
  });

  const confirmPasswordInputClasses = classNames({
    input: true,
    'is-success': confirmPassword && match,
    'is-danger': confirmPassword && !match,
  });

  const confirmPasswordHelpClasses = classNames({
    help: true,
    'is-success': match,
    'is-danger': !match,
  });

  return (
    <div className="change-password box">
      <h3 className="title is-3">Change Password</h3>
      <hr className="separator" />

      <div className="field">
        <label htmlFor="old-password" className="label">Old Password</label>
        <p className="control">
          <input
            id="old-password"
            className="input"
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={updateOldPassword} />
        </p>
      </div>

      <p className="has-space-below">
        <Link to="/recovery">Forgot your password?</Link>
      </p>

      <div className="field has-help">
        <label htmlFor="new-password" className="label">New Password</label>
        <p className="control has-icons-right">
          <input
            id="new-password"
            className={newPasswordInputClasses}
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={updateNewPassword} />
          <span className="icon is-small is-right">
            <i className={newPasswordIconClasses} />
          </span>
        </p>
        {newPassword &&
          <p className={newPasswordHelpClasses}>{message}</p>}
      </div>

      <div className="field has-help">
        <label htmlFor="confirm-password" className="label">Confirm Password</label>
        <p className="control has-icons-right">
          <input
            id="confirm-password"
            className={confirmPasswordInputClasses}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={updateConfirmPassword} />
          <span className="icon is-small is-right">
            <i className={confirmPasswordIconClasses} />
          </span>
        </p>
        {confirmPassword &&
          <p className={confirmPasswordHelpClasses}>
            {match ?
              'Passwords match' :
              'Passwords must match'}
          </p>}
      </div>

      <hr className="separator" />
      <button className="button is-success" onClick={save} disabled={!match || !valid || !oldPassword}>
        Update Password
      </button>
    </div>
  );
}

ChangePassword.propTypes = {
  oldPassword: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  updateOldPassword: PropTypes.func.isRequired,
  updateNewPassword: PropTypes.func.isRequired,
  updateConfirmPassword: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
};
