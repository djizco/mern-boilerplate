import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import R from 'ramda';

import Menu from 'react-bulma-companion/lib/Menu';
import Box from 'react-bulma-companion/lib/Box';

import { attemptLogout } from '_thunks/auth';

export default function SettingsMenu({ pathname }) {
  const dispatch = useDispatch();

  const logout = () =>
    dispatch(attemptLogout())
      .catch(R.identity);

  return (
    <Box>
      <Menu className="settings-menu">
        <Menu.Label>
          Personal
        </Menu.Label>
        <Menu.List>
          <Menu.ListItem>
            <Menu.Link
              onClick={() => dispatch(push('/settings/profile'))}
              active={pathname.includes('profile') || pathname === '/settings' || pathname === '/settings/'}
            >
              Profile
            </Menu.Link>
          </Menu.ListItem>
        </Menu.List>
        <Menu.Label>
          Settings
        </Menu.Label>
        <Menu.List>
          <Menu.ListItem>
            <Menu.Link
              onClick={() => dispatch(push('/settings/account'))}
              active={pathname.includes('account')}
            >
              Account
            </Menu.Link>
          </Menu.ListItem>
          <Menu.ListItem>
            <Menu.Link onClick={logout} onKeyPress={logout}>
              Logout
            </Menu.Link>
          </Menu.ListItem>
        </Menu.List>
      </Menu>
    </Box>
  );
}

SettingsMenu.propTypes = {
  pathname: PropTypes.string.isRequired,
};
