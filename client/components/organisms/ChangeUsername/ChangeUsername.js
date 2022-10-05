import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import R from 'ramda';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation';

import Box from 'react-bulma-companion/lib/Box';
import Title from 'react-bulma-companion/lib/Title';
import Field from 'react-bulma-companion/lib/Field';
import Control from 'react-bulma-companion/lib/Control';
import Label from 'react-bulma-companion/lib/Label';
import Input from 'react-bulma-companion/lib/Input';
import Icon from 'react-bulma-companion/lib/Icon';
import Help from 'react-bulma-companion/lib/Help';
import Button from 'react-bulma-companion/lib/Button';

import { attemptUpdateUser } from '_store/thunks/user';

export default function ChangeUsername() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  const [usernameCase, setUsernameCase] = useState(user.usernameCase);

  const updateUsernameCase = e => setUsernameCase(e.target.value);

  const disabled = (user.usernameCase === usernameCase)
    || usernameCase.toLowerCase() !== user.username;

  const saveUsernameCase = () => {
    if (usernameCase.toLowerCase() === user.username) {
      const updatedUser = { username_case: usernameCase };

      dispatch(attemptUpdateUser(updatedUser))
        .catch(() => setUsernameCase(user.usernameCase));
    }
  };

  const helpMessage = disabled ? `Username case must match: ${user.username}` : 'Username case valid.';

  return (
    <Box className="change-username">
      <Title size="3">
        Username
      </Title>
      <hr className="separator" />
      <Field>
        <Label htmlFor="username">
          Current Username
        </Label>
        <Control className="control">
          {user.usernameCase}
        </Control>
      </Field>
      <Field className="has-help">
        <Label htmlFor="username-case">
          Username Case
        </Label>
        <Control iconsRight>
          <Input
            id="username-case"
            color={disabled ? (usernameCase !== user.usernameCase ? 'danger' : undefined) : 'success'}
            placeholder="Username Case"
            value={usernameCase}
            onChange={updateUsernameCase}
          />
          {disabled && (usernameCase !== user.usernameCase) && (
            <Icon
              size="small"
              align="right"
              color={disabled ? (usernameCase !== user.usernameCase ? 'danger' : undefined) : 'success'}
            >
              <FontAwesomeIcon
                icon={disabled ? (usernameCase !== user.usernameCase && faTriangleExclamation) : faCheck}
              />
            </Icon>
          )}
        </Control>
        {usernameCase !== user.usernameCase && (
          <Help color={disabled ? 'danger' : 'success'}>
            {helpMessage}
          </Help>
        )}
      </Field>
      <hr className="separator" />
      <Button
        color="success"
        disabled={disabled}
        onClick={saveUsernameCase}
      >
        Save
      </Button>
    </Box>
  );
}
