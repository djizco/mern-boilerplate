import React from 'react';
import * as R from 'ramda';
import { Route, IndexRoute } from 'react-router';

import Main from '_layouts/Main';
import WelcomePage from '_pages/WelcomePage';
import HomePage from '_pages/HomePage';
import LoginPage from '_pages/LoginPage';
import RegisterPage from '_pages/RegisterPage';
import SettingsPage from '_pages/SettingsPage';
import SettingsProfile from '_structures/Settings/Profile';
import SettingsAccount from '_structures/Settings/Account';
import LostPage from '_pages/LostPage';

import store from './store';

const requireAuth = (nextState, replace) => R.isEmpty(store.getState().user) && replace('/login');

const requireUnauth = (nextState, replace) => !R.isEmpty(store.getState().user) && replace('/home');

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
