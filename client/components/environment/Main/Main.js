import React, { useState, useEffect } from 'react';
import R from 'ramda';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import { useDispatch } from 'react-redux';

import { attemptGetUser } from '_store/thunks/user';

import WelcomePage from '_components/pages/WelcomePage';
import LoginPage from '_components/pages/LoginPage';
import RegisterPage from '_components/pages/RegisterPage';
import HomePage from '_components/pages/HomePage';
import TodoPage from '_components/pages/TodoPage';
import SettingsPage from '_components/pages/SettingsPage';
import LostPage from '_components/pages/LostPage';

import Navigation from '_components/organisms/Navigation';
import Footer from '_components/organisms/Footer';

import styles from './styles.module.css';

export default function Main() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    let subscribed = true;

    dispatch(attemptGetUser())
      .then(() => subscribed && setLoading(false))
      .catch(R.identity);

    return () => { subscribed = false; };
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return !loading && (
    <React.Fragment>
      <ReactNotifications />
      <Navigation />
      <div className={styles.root}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="settings/*" element={<SettingsPage />} />
          <Route path="*" element={<LostPage />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}
