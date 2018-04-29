import React from 'react';
import R from 'ramda';
import { Route, IndexRoute } from 'react-router';

import store from './store';

import Main from './components/Main';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import SettingsPage from './pages/SettingsPage';
import SettingsProfile from './components/Settings/Profile';
import SettingsAccount from './components/Settings/Account';

import LostPage from './pages/LostPage';

const requireAuth = (nextState, replace) =>
  R.isEmpty(store.getState().user) && replace('/login');

const requireUnauth = (nextState, replace) =>
  !R.isEmpty(store.getState().user) && replace('/home');


export default (
  <Route path="/" component={Main}>
    <IndexRoute component={WelcomePage} onEnter={requireUnauth} />
    <Route path="home" component={HomePage} onEnter={requireAuth} />
    <Route path="login" component={LoginPage} onEnter={requireUnauth} />
    <Route path="register" component={RegisterPage} onEnter={requireUnauth} />

    <Route path="settings" component={SettingsPage} onEnter={requireAuth}>
      <IndexRoute component={SettingsProfile} />
      <Route path="profile" component={SettingsProfile} />
      <Route path="account" component={SettingsAccount} />
    </Route>

    <Route path="*" component={LostPage} />
  </Route>
);
