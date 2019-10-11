import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import useKeyPress from '_hooks/useKeyPress';
import { attemptLogin } from '_thunks/auth';
import Box from '_molecules/Box';
import FormInput from '_molecules/FormInput';

export default function Login() {
  const dispatch = useDispatch();

  const [remember, setRemember] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setRemember(true);
      setUsername(username);
    }
  }, []);

  const login = () => {
    const userCredentials = { username, password };

    if (remember) {
      localStorage.setItem('username', username);
    }

    dispatch(attemptLogin(userCredentials))
      .catch(R.identity);
  };

  useKeyPress('Enter', login);

  const rememberMe = () => {
    localStorage.removeItem('username');
    setRemember(!remember);
  };

  const updateUsername = e => setUsername(e.target.value);
  const updatePassword = e => setPassword(e.target.value);

  return (
    <Box className="login">
      <h3 className="title is-3">
        Login
      </h3>
      <hr className="separator" />
      <p className="has-space-below">
        Not Registered Yet?&nbsp;
        <Link to="/register">
          Create an account.
        </Link>
      </p>

      <FormInput
        onChange={updateUsername}
        placeholder="Username"
        value={username}
        leftIcon={faUser}
      />

      <FormInput
        onChange={updatePassword}
        placeholder="Password"
        value={password}
        leftIcon={faLock}
        type="password"
      />

      <p className="has-space-below">
        <Link to="/recovery">
          Forgot your password?
        </Link>
      </p>
      <hr className="separator" />
      <p className="control is-clearfix">
        <button type="button" className="button is-success is-pulled-right" onClick={login}>
          Login
        </button>
        <input type="checkbox" onChange={rememberMe} checked={remember} />
        &nbsp; Remember me
      </p>
    </Box>
  );
}
