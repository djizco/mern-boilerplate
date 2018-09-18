import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Box from '_molecules/Box';
import Button from '_atoms/Button';

export default function Register(props) {
  const {
    username, usernameMessage, handleUsernameChange,
    password, passwordMessage, handlePasswordChange,
    usernameAvailable, passwordValid, register,
  } = props;

  const usernameIconClasses = classNames({
    fa: true,
    'fa-check': usernameAvailable,
    'fa-warning': username && !usernameAvailable,
    'is-success': usernameAvailable,
    'is-danger': username && !usernameAvailable,
  });

  const usernameInputClasses = classNames({
    input: true,
    'is-success': usernameAvailable,
    'is-danger': username && !usernameAvailable,
  });

  const usernameHelpClasses = classNames({
    help: true,
    'is-success': usernameAvailable,
    'is-danger': username && !usernameAvailable,
  });

  const passwordIconClasses = classNames({
    fa: true,
    'fa-check': passwordValid,
    'fa-warning': password && !passwordValid,
    'is-success': passwordValid,
    'is-danger': password && !passwordValid,
  });

  const passwordInputClasses = classNames({
    input: true,
    'is-success': passwordValid,
    'is-danger': password && !passwordValid,
  });

  const passwordHelpClasses = classNames({
    help: true,
    'is-success': passwordValid,
    'is-danger': password && !passwordValid,
  });

  return (
    <Box className="register">
      <h3 className="title is-3">
        Sign Up
      </h3>
      <hr className="separator" />
      <p className="has-space-below">
        {'Already a member? '}
        <Link to="/login">
          Login
        </Link>
      </p>

      <div className="field">
        <label htmlFor="username" className="label">
          Username
        </label>
        <p className="control has-icons-right">
          <input
            id="username"
            className={usernameInputClasses}
            placeholder="Username"
            type="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <span className="icon is-small is-right">
            <i className={usernameIconClasses} />
          </span>
        </p>
        {username && (
          <p className={usernameHelpClasses}>
            {usernameMessage}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="password" className="label">
          Password
        </label>
        <p className="control has-icons-right">
          <input
            id="password"
            className={passwordInputClasses}
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="icon is-small is-right">
            <i className={passwordIconClasses} />
          </span>
        </p>
        {password && (
          <p className={passwordHelpClasses}>
            {passwordMessage}
          </p>
        )}
      </div>

      <hr className="separator" />

      <div className="has-text-right">
        <Button
          type="success"
          disabled={!passwordValid || !usernameAvailable}
          onClick={register}
          label="Create Account"
        />
      </div>
    </Box>
  );
}

Register.propTypes = {
  username: PropTypes.string.isRequired,
  usernameMessage: PropTypes.string.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  passwordMessage: PropTypes.string.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  usernameAvailable: PropTypes.bool.isRequired,
  passwordValid: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};
