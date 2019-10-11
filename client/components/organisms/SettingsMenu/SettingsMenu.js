import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { attemptLogout } from '_thunks/auth';

export default function SettingsMenu({ pathname }) {
  const dispatch = useDispatch();

  const logout = () =>
    dispatch(attemptLogout())
      .catch(R.identity);

  const profileClasses = classNames({
    'is-active': pathname.includes('profile') || pathname === '/settings' || pathname === '/settings/',
  });

  const accountClasses = classNames({ 'is-active': pathname.includes('account') });

  return (
    <aside className="settings-menu menu box">
      <p className="menu-label">
        Personal
      </p>
      <ul className="menu-list">
        <li>
          <Link to="/settings/profile" className={profileClasses}>
            Profile
          </Link>
        </li>
      </ul>
      <p className="menu-label">
        Settings
      </p>
      <ul className="menu-list">
        <li>
          <Link to="/settings/account" className={accountClasses}>
            Account
          </Link>
        </li>
        <li>
          <a onClick={logout} onKeyPress={logout}>
            Logout
          </a>
        </li>
      </ul>
    </aside>
  );
}

SettingsMenu.propTypes = {
  pathname: PropTypes.string.isRequired,
};
