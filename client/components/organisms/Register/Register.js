import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import R from 'ramda';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';

import Box from 'react-bulma-companion/lib/Box';
import Button from 'react-bulma-companion/lib/Button';
import Title from 'react-bulma-companion/lib/Title';
import Field from 'react-bulma-companion/lib/Field';
import Control from 'react-bulma-companion/lib/Control';
import Icon from 'react-bulma-companion/lib/Icon';
import Input from 'react-bulma-companion/lib/Input';
import Label from 'react-bulma-companion/lib/Label';
import Help from 'react-bulma-companion/lib/Help';

import useKeyPress from '_hooks/useKeyPress';
import { postCheckUsername } from '_api/users';
import { validateUsername, validatePassword } from '_utils/validation';
import { attemptRegister } from '_thunks/auth';

export default function Register() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [usernameMessage, setUsernameMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const checkPassword = (newUsername, newPassword) => {
    const { valid, message } = validatePassword(newUsername, newPassword);

    setPasswordValid(valid);
    setPasswordMessage(message);
  };

  const checkUsername = newUsername => {
    const { valid, message } = validateUsername(newUsername);

    if (valid) {
      setUsernameMessage('Checking username...');
      setUsernameAvailable(false);

      postCheckUsername(newUsername)
        .then(res => {
          setUsernameAvailable(res.available);
          setUsernameMessage(res.message);
        })
        .catch(R.identity);
    } else {
      setUsernameAvailable(valid);
      setUsernameMessage(message);
    }
  };

  const updateUsername = newUserName => {
    setUsername(newUserName);
    checkPassword(newUserName, password);
  };

  const handleUsernameChange = e => {
    updateUsername(e.target.value);
    checkUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
    checkPassword(username, e.target.value);
  };

  const register = () => {
    if (usernameAvailable && passwordValid) {
      const newUser = {
        username,
        password,
      };

      dispatch(attemptRegister(newUser))
        .catch(R.identity);
    }
  };

  useKeyPress('Enter', register);

  return (
    <Box className="register">
      <Title size="3">
        Sign Up
      </Title>
      <hr className="separator" />
      <p className="has-space-below">
        Already a member?&nbsp;
        <Link to="/login">
          Login
        </Link>
      </p>
      <Field>
        <Label htmlFor="username">
          Username
        </Label>
        <Control iconsRight>
          <Input
            id="username"
            placeholder="Username"
            color={username ? (usernameAvailable ? 'success' : 'danger') : undefined}
            value={username}
            onChange={handleUsernameChange}
          />
          {username && (
            <Icon
              size="small"
              align="right"
              color={usernameAvailable ? 'success' : 'danger'}
            >
              <FontAwesomeIcon
                icon={usernameAvailable ? faCheck : faExclamationTriangle}
              />
            </Icon>
          )}
        </Control>
        {username && (
          <Help color={usernameAvailable ? 'success' : 'danger'}>
            {usernameMessage}
          </Help>
        )}
      </Field>
      <Field>
        <Label htmlFor="password">
          Password
        </Label>
        <Control iconsRight>
          <Input
            id="password"
            placeholder="Password"
            type="password"
            color={password ? (passwordValid ? 'success' : 'danger') : undefined}
            value={password}
            onChange={handlePasswordChange}
          />
          {password && (
            <Icon
              size="small"
              align="right"
              color={passwordValid ? 'success' : 'danger'}
            >
              <FontAwesomeIcon
                icon={passwordValid ? faCheck : faExclamationTriangle}
              />
            </Icon>
          )}
        </Control>
        {password && (
          <Help color={passwordValid ? 'success' : 'danger'}>
            {passwordMessage}
          </Help>
        )}
      </Field>
      <hr className="separator" />
      <div className="has-text-right">
        <Button color="success" onClick={register} disabled={!passwordValid || !usernameAvailable}>
          Create Account
        </Button>
      </div>
    </Box>
  );
}
