import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import R from '_utils/ramda';

import { attemptLogout } from '_thunks/auth';

export default function UserDropdown({ open, closeDropdown }) {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  const dropdown = useRef(null);

  const dropdownListener = e =>
    !e.path.includes(dropdown.current) && open && closeDropdown();

  useEffect(() => {
    window.addEventListener('click', dropdownListener);
    window.addEventListener('touchend', dropdownListener);

    return () => {
      window.removeEventListener('click', dropdownListener);
      window.removeEventListener('touchend', dropdownListener);
    };
  }, [open]);

  const logout = () => {
    closeDropdown();
    dispatch(attemptLogout())
      .catch(R.identity);
  };

  return open && (
    <div className="dropdown box" ref={dropdown}>
      <ul className="dropdown-list">
        <li className="dropdown-header">
          {user.usernameCase}
        </li>
        <hr className="dropdown-separator" />
        <li className="dropdown-item">
          <Link to="/todo" onClick={closeDropdown}>
            Todo List
          </Link>
        </li>
        <li className="dropdown-item">
          <Link to="/settings" onClick={closeDropdown}>
            Settings
          </Link>
        </li>
        <hr className="dropdown-separator" />
        <li className="dropdown-item">
          <a onClick={logout} onKeyPress={logout}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

UserDropdown.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};
