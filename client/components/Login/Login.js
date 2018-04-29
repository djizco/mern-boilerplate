import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default function Login(props) {
  const { remember, username, password, updateUsername, updatePassword, rememberMe, login } = props;

  return (
    <div className="login section">
      <div className="box">
        <h3 className="title is-3">Login</h3>
        <hr className="separator" />
        <p className="has-space-below">
          Not Registered Yet? <Link to="/register">Create an account.</Link>
        </p>

        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Username"
              onChange={e => updateUsername(e.target.value)}
              value={username} />
            <span className="icon is-small is-left">
              <i className="fa fa-user" />
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              onChange={e => updatePassword(e.target.value)}
              value={password} />
            <span className="icon is-small is-left">
              <i className="fa fa-lock" />
            </span>
          </p>
        </div>

        <p className="has-space-below">
          <Link to="/recovery">Forgot your password?</Link>
        </p>
        <hr className="separator" />
        <p className="control is-clearfix">
          <button className="button is-success is-pulled-right" onClick={login}>
            Login
          </button>
          <input type="checkbox" onChange={rememberMe} checked={remember} />
          &nbsp; Remember me
        </p>
      </div>
    </div>
  );
}

Login.propTypes = {
  remember: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateUsername: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  rememberMe: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};
