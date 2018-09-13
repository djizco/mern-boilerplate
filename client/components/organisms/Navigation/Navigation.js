import React  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classNames from 'classnames';
import * as R from 'ramda';
import UserDropdown from '_molecules/UserDropdown';
import Button from '_atoms/Button';

export default function Navigation(props) {
  const {
    user, auth, pathname, toggleUserDropdown, closeUserDropdown, userDropdownOpen,
  } = props;

  const isHome = (pathname.length === 5)
    ? pathname === '/home'
    : R.slice(0, 6, pathname) === '/home/';

  const isSettings = (pathname.length === 9)
    ? pathname === '/settings'
    : R.slice(0, 10, pathname) === '/settings/';

  const homeItemClasses = classNames({
    'nav-item': true,
    'is-tab': true,
    'is-hidden-mobile': true,
    'is-active': isHome,
  });

  const settingsItemClasses = classNames({
    'nav-item': true,
    'is-tab': true,
    'is-hidden-mobile': true,
    'is-active': isSettings,
  });

  return (
    <nav className="nav has-shadow is-fixed">
      <div className="container">

        <div className="nav-left">
          <Link to={auth ? '/home' : '/'} className="nav-item">
            <h3 className="title is-3 logo">
              MERN Boilerplate
            </h3>
          </Link>
          {auth && (
            <Link to="/home" className={homeItemClasses}>
              <h6 className="title is-6">
                Home
              </h6>
            </Link>
          )}
          {auth && (
            <Link to="/settings" className={settingsItemClasses}>
              <h6 className="title is-6">
                Settings
              </h6>
            </Link>
          )}
        </div>

        {auth ? (
          <div className="nav-right">
            <a className="nav-item is-hoverable" onClick={toggleUserDropdown} onKeyPress={toggleUserDropdown}>
              <figure className="image nav-image is-32x32">
                <img className="profile-img" src={user.profilePic || '/assets/images/default-profile.png'} alt="" />
              </figure>
              <span className="dropdown-caret" />
            </a>
            <UserDropdown open={userDropdownOpen} closeDropdown={closeUserDropdown} />
          </div>
        ) : (
          <div className="nav-right">
            <Link to="/login" className="nav-item">
              <h6 className="title is-6">
                Login
              </h6>
            </Link>
            <Link to="/register" className="nav-item">
              <Button label="Sign Up" type="success" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  auth: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
  userDropdownOpen: PropTypes.bool.isRequired,
  toggleUserDropdown: PropTypes.func.isRequired,
  closeUserDropdown: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    usernameCase: PropTypes.string,
    profilePic: PropTypes.string,
  }).isRequired,
};
