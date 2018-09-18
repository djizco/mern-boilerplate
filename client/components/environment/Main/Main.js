import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
import Notifications from 'react-notification-system-redux';

import WelcomePage from '_pages/WelcomePage';
import HomePage from '_pages/HomePage';
import LoginPage from '_pages/LoginPage';
import RegisterPage from '_pages/RegisterPage';
import SettingsPage from '_pages/SettingsPage';
import LostPage from '_pages/LostPage';

import Navigation from '_organisms/Navigation';
import Footer from '_organisms/Footer';

export default function Main(props) {
  const { location, alerts } = props;
  return (
    <div className="has-navbar-fixed-top">
      <Notifications notifications={alerts} />
      <Navigation pathname={location.pathname} />
      <div className="main">
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/settings" component={SettingsPage} />
          <Route path="*" component={LostPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

Main.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  alerts: PropTypes.array.isRequired,
};
