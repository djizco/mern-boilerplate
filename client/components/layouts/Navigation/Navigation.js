import React, { useEffect, useState }  from 'react';

import R from 'ramda';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import Button from 'react-bulma-companion/lib/Button';
import Container from 'react-bulma-companion/lib/Container';
import Navbar from 'react-bulma-companion/lib/Navbar';
import Title from 'react-bulma-companion/lib/Title';

import UserDropdown from './UserDropdown';

export default function Navigation() {
  const { pathname } = useLocation();
  const user = useSelector(state => state.user);

  const [auth, setAuth] = useState(!R.isEmpty(user));

  useEffect(() => {
    setAuth(!R.isEmpty(user));
  }, [user]);

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
              MERN
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
                hoverable
                clickable
              >
                <UserDropdown />
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
              <Navbar.Item
                hoverable
                clickable
              >
                <UserDropdown />
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
      </Container>
    </Navbar>
  );
}
