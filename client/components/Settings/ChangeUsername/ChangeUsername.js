import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ChangeUsername(props) {
  const {
    disabled, username, usernameCase, currentUsernameCase, updateUsernameCase, saveUsernameCase,
  } = props;

  const helpClasses = classNames({
    help: true,
    'is-success': !disabled,
    'is-danger': disabled,
  });

  const inputClasses = classNames({
    input: true,
    'is-success': !disabled,
    'is-danger': disabled && usernameCase !== currentUsernameCase,
  });

  const iconClasses = classNames({
    fa: true,
    'fa-check': !disabled,
    'is-success': !disabled,
    'fa-warning': disabled && usernameCase !== currentUsernameCase,
    'is-danger': disabled && usernameCase !== currentUsernameCase,
  });

  const helpMessage = disabled ? `Username case must match: ${username}` : 'Username case valid.';

  return (
    <div className="change-username box">
      <h3 className="title is-3">Username</h3>
      <hr className="separator" />

      <div className="field">
        <label htmlFor="username" className="label">Current Username</label>
        <p className="control">
          {currentUsernameCase}
        </p>
      </div>

      <div className="field has-help">
        <label htmlFor="username-case" className="label">Username Case</label>
        <p className="control has-icons-right">
          <input
            id="username-case"
            className={inputClasses}
            type="text"
            placeholder="Username Case"
            value={usernameCase}
            onChange={updateUsernameCase} />
          <span className="icon is-small is-right">
            <i className={iconClasses} />
          </span>
        </p>
        {usernameCase !== currentUsernameCase &&
          <p className={helpClasses}>{helpMessage}</p>}
      </div>
      <hr className="separator" />
      <button
        className="button is-success"
        disabled={disabled}
        onClick={saveUsernameCase}>
        Save
      </button>
    </div>
  );
}

ChangeUsername.propTypes = {
  disabled: PropTypes.bool.isRequired,
  username: PropTypes.string,
  usernameCase: PropTypes.string.isRequired,
  currentUsernameCase: PropTypes.string,
  updateUsernameCase: PropTypes.func.isRequired,
  saveUsernameCase: PropTypes.func.isRequired,
};

ChangeUsername.defaultProps = {
  username: '',
  currentUsernameCase: '',
};
