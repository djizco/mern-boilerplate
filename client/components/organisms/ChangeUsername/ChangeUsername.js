import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import * as R from 'ramda';

import { attemptUpdateUser } from '_thunks/user';

export default function ChangeUsername() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  const [usernameCase, setUsernameCase] = useState(user.usernameCase);

  useEffect(() => {
    if (!R.isEmpty(user)) {
      setUsernameCase(user.usernameCase);
    }
  }, [user.username]);

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

  const helpClasses = classNames({
    help: true,
    'is-success': !disabled,
    'is-danger': disabled,
  });

  const inputClasses = classNames({
    input: true,
    'is-success': !disabled,
    'is-danger': disabled && usernameCase !== user.usernameCase,
  });

  const iconClasses = classNames({
    fa: true,
    'fa-check': !disabled,
    'is-success': !disabled,
    'fa-warning': disabled && usernameCase !== user.usernameCase,
    'is-danger': disabled && usernameCase !== user.usernameCase,
  });

  const helpMessage = disabled ? `Username case must match: ${user.username}` : 'Username case valid.';

  return (
    <div className="change-username box">
      <h3 className="title is-3">
        Username
      </h3>
      <hr className="separator" />

      <div className="field">
        <label htmlFor="username" className="label">
          Current Username
        </label>
        <p className="control">
          {user.usernameCase}
        </p>
      </div>

      <div className="field has-help">
        <label htmlFor="username-case" className="label">
          Username Case
        </label>
        <p className="control has-icons-right">
          <input
            id="username-case"
            className={inputClasses}
            type="text"
            placeholder="Username Case"
            value={usernameCase}
            onChange={updateUsernameCase}
          />
          <span className="icon is-small is-right">
            <i className={iconClasses} />
          </span>
        </p>
        {usernameCase !== user.usernameCase && (
          <p className={helpClasses}>
            {helpMessage}
          </p>
        )}
      </div>
      <hr className="separator" />
      <button
        type="button"
        className="button is-success"
        disabled={disabled}
        onClick={saveUsernameCase}
      >
        Save
      </button>
    </div>
  );
}
