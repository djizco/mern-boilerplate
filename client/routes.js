import React from 'react';
import * as R from 'ramda';
import { Route, IndexRoute } from 'react-router';

import Main from '_environment/Main';
import WelcomePage from '_pages/WelcomePage';
import HomePage from '_pages/HomePage';
import LoginPage from '_pages/LoginPage';
import RegisterPage from '_pages/RegisterPage';
import SettingsPage from '_pages/SettingsPage';
import ProfileSettings from '_templates/ProfileSettings';
import AccountSettings from '_templates/AccountSettings';
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
      <IndexRoute component={ProfileSettings} />
      <Route path="profile" component={ProfileSettings} />
      <Route path="account" component={AccountSettings} />
    </Route>
    <Route path="*" component={LostPage} />
  </Route>
);
