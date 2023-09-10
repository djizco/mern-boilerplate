import React from 'react';
import PropTypes from 'prop-types';

import R from 'ramda';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';

import Dropdown from 'react-bulma-companion/lib/Dropdown';
import Image from 'react-bulma-companion/lib/Image';
import Icon from 'react-bulma-companion/lib/Icon';

import { attemptLogout } from '_store/thunks/auth';

import styles from './styles.module.css';

export default function UserDropdown({
  active,
  onClose,
}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const logout = () => {
    dispatch(attemptLogout())
      .then(onClose)
      .catch(R.identity);
  };

  return (
    <Dropdown active={active} right>
      <Dropdown.Trigger display="flex" alignItems="center">
        <Image size="32x32">
          <Image.Content
            className="profile-img"
            src={user.profilePic || '/images/default-profile.png'}
          />
        </Image>
        <Icon size="small" color="grey-lighter">
          <FontAwesomeIcon icon={faCaretDown} />
        </Icon>
      </Dropdown.Trigger>
      <Dropdown.Menu id="dropdown-menu" role="menu">
        <Dropdown.Content className={styles.content}>
          <Dropdown.Item className={styles.header} textAlign="center">
            {user.usernameCase}
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className={styles.item}
            component={Link}
            to="/todo"
            onClick={onClose}
          >
            Todo List
          </Dropdown.Item>
          <Dropdown.Item
            className={styles.item}
            component={Link}
            to="/settings"
            onClick={onClose}
          >
            Settings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className={styles.item}
            component={Link}
            onClick={logout}
          >
            Logout
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Menu>
    </Dropdown>
  );
}

UserDropdown.propTypes = {
  active: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
