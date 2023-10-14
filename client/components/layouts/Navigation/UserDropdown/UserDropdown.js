import React from 'react';

import R from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Dropdown from 'react-bulma-companion/lib/Dropdown';
import Icon from 'react-bulma-companion/lib/Icon';
import Image from 'react-bulma-companion/lib/Image';

import { attemptLogout } from '_store/thunks/auth';

import styles from './styles.module.css';

export default function UserDropdown() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const logout = () => {
    dispatch(attemptLogout())
      .catch(R.identity);
  };

  return (
    <Dropdown right hoverable>
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
          >
            Todo List
          </Dropdown.Item>
          <Dropdown.Item
            className={styles.item}
            component={Link}
            to="/settings"
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
