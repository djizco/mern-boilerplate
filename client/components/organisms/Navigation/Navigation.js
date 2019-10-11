import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import * as R from 'ramda';

import UserDropdown from '_molecules/UserDropdown';
import Button from '_atoms/Button';

export default function Navigation({ pathname }) {
  const { user } = useSelector(R.pick(['user']));

  const [auth, setAuth] = useState(!R.isEmpty(user));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setAuth(!R.isEmpty(user));
  }, [user.username]);

  const toggleDropdown = () => setOpen(!open);

  const closeDropdown = () => setOpen(false);

  const isHome = (pathname.length === 5)
    ? pathname === '/home'
    : R.slice(0, 6, pathname) === '/home/';

  const isTodo = (pathname.length === 5)
    ? pathname === '/todo'
    : R.slice(0, 6, pathname) === '/todo/';

  const isSettings = (pathname.length === 9)
    ? pathname === '/settings'
    : R.slice(0, 10, pathname) === '/settings/';

  const homeItemClasses = classNames({
    'navbar-item': true,
    'is-tab': true,
    'is-hidden-mobile': true,
    'is-active': isHome,
  });

  const todoItemClasses = classNames({
    'navbar-item': true,
    'is-tab': true,
    'is-hidden-mobile': true,
    'is-active': isTodo,
  });

  const settingsItemClasses = classNames({
    'navbar-item': true,
    'is-tab': true,
    'is-hidden-mobile': true,
    'is-active': isSettings,
  });

  return (
    <nav className="navbar is-fixed-top has-shadow" role="navigation">
      <div className="container">

        <div className="navbar-brand">
          <Link to={auth ? '/home' : '/'} className="navbar-item" aria-label="main navigation">
            <h3 className="title is-3 logo">
              MERN Boilerplate
            </h3>
          </Link>
          <div className="navbar-brand-right">
            {!auth && (
              <Link to="/login" className="navbar-item is-hidden-desktop">
                <h6 className="title is-6">
                  Login
                </h6>
              </Link>
            )}
            {!auth && (
              <Link to="/register" className="navbar-item is-hidden-desktop">
                <Button label="Sign Up" type="success" />
              </Link>
            )}
            {auth && (
              <a
                className="navbar-item is-hoverable is-hidden-desktop"
                onClick={toggleDropdown}
                onKeyPress={toggleDropdown}
              >
                <figure className="image navbar-image is-32x32">
                  <img className="profile-img" src={user.profilePic || '/images/default-profile.png'} alt="" />
                </figure>
                <span className="dropdown-caret" />
              </a>
            )}
          </div>
        </div>

        {auth ? (
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/home" className={homeItemClasses}>
                <h6 className="title is-6">
                  Home
                </h6>
              </Link>
              <Link to="/todo" className={todoItemClasses}>
                <h6 className="title is-6">
                  Todo
                </h6>
              </Link>
              <Link to="/settings" className={settingsItemClasses}>
                <h6 className="title is-6">
                  Settings
                </h6>
              </Link>
            </div>
            <div className="navbar-end">
              <a className="navbar-item is-hoverable" onClick={toggleDropdown} onKeyPress={toggleDropdown}>
                <figure className="image navbar-image is-32x32">
                  <img className="profile-img" src={user.profilePic || '/images/default-profile.png'} alt="" />
                </figure>
                <span className="dropdown-caret" />
              </a>
            </div>
          </div>
        ) : (
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link to="/login" className="navbar-item">
                <h6 className="title is-6">
                  Login
                </h6>
              </Link>
              <Link to="/register" className="navbar-item">
                <Button label="Sign Up" type="success" />
              </Link>
            </div>
          </div>
        )}
        <UserDropdown open={open} closeDropdown={closeDropdown} />
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
};
