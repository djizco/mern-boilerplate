import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import R from 'ramda';

import Navbar from 'react-bulma-companion/lib/Navbar';
import Container from 'react-bulma-companion/lib/Container';
import Image from 'react-bulma-companion/lib/Image';
import Title from 'react-bulma-companion/lib/Title';
import Button from 'react-bulma-companion/lib/Button';

import UserDropdown from '_molecules/UserDropdown';

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

  return (
    <Navbar fixed="top" shadow>
      <Container>
        <Navbar.Brand>
          <Navbar.Item
            to={auth ? '/home' : '/'}
            aria-label="main navigation"
            component={Link}
          >
            <Title className="logo" size="3">
              MERN Boilerplate
            </Title>
          </Navbar.Item>
          <div className="navbar-brand-right">
            {!auth && (
              <Navbar.Item
                className="is-hidden-desktop"
                to="/login"
                component={Link}
              >
                <Title size="6">
                  Login
                </Title>
              </Navbar.Item>
            )}
            {!auth && (
              <Navbar.Item
                className="is-hidden-desktop"
                to="/register"
                component={Link}
              >
                <Button color="success">Sign Up</Button>
              </Navbar.Item>
            )}
            {auth && (
              <Navbar.Item
                className="is-hidden-desktop"
                onClick={toggleDropdown}
                onKeyPress={toggleDropdown}
                hoverable
                component="a"
              >
                <Image size="32x32">
                  <Image.Content
                    className="profile-img"
                    src={user.profilePic || '/images/default-profile.png'}
                  />
                </Image>
                <span className="dropdown-caret" />
              </Navbar.Item>
            )}
          </div>
        </Navbar.Brand>

        {auth ? (
          <Navbar.Menu>
            <Navbar.Start>
              <Navbar.Item
                className="is-hidden-mobile"
                to="/home"
                active={isHome}
                tab
                component={Link}
              >
                <Title size="6">Home</Title>
              </Navbar.Item>
              <Navbar.Item
                className="is-hidden-mobile"
                to="/todo"
                active={isTodo}
                tab
                component={Link}
              >
                <Title size="6">
                  Todo
                </Title>
              </Navbar.Item>
              <Navbar.Item
                className="is-hidden-mobile"
                to="/settings"
                active={isSettings}
                tab
                component={Link}
              >
                <Title size="6">
                  Settings
                </Title>
              </Navbar.Item>
            </Navbar.Start>
            <Navbar.End>
              <Navbar.Item onClick={toggleDropdown} onKeyPress={toggleDropdown} hoverable component="a">
                <Image size="32x32">
                  <Image.Content
                    className="profile-img"
                    src={user.profilePic || '/images/default-profile.png'}
                  />
                </Image>
                <span className="dropdown-caret" />
              </Navbar.Item>
            </Navbar.End>
          </Navbar.Menu>
        ) : (
          <Navbar.Menu>
            <Navbar.End>
              <Navbar.Item to="/login" component={Link}>
                <Title size="6">
                  Login
                </Title>
              </Navbar.Item>
              <Navbar.Item to="/register" component={Link}>
                <Button color="success">Sign Up</Button>
              </Navbar.Item>
            </Navbar.End>
          </Navbar.Menu>
        )}
        <UserDropdown open={open} closeDropdown={closeDropdown} />
      </Container>
    </Navbar>
  );
}

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
};
