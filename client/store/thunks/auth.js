import { push } from 'connected-react-router';
import { snakeToCamelCase } from 'json-style-converter/es5';
import Notifications from 'react-notification-system-redux';

import { postRegister, postLogin, postLogout } from '_api/auth';
import { login, logout } from '_actions/user';

import { dispatchError } from '_utils/api';

export const attemptLogin = user => dispatch =>
  postLogin(user)
    .then(data => {
      dispatch(login(snakeToCamelCase(data.user)));
      dispatch(Notifications.success({
        title: 'Success!',
        message: data.message,
        position: 'tr',
        autoDismiss: 3,
      }));
      dispatch(push('/home'));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptRegister = newUser => dispatch =>
  postRegister(newUser)
    .then(data => {
      dispatch(Notifications.success({
        title: 'Success!',
        message: data.message,
        position: 'tr',
        autoDismiss: 3,
      }));
      return dispatch(attemptLogin(newUser));
    })
    .then(() => dispatch(push('/settings')))
    .catch(dispatchError(dispatch));

export const attemptLogout = () => dispatch =>
  postLogout()
    .then(data => {
      dispatch(logout());
      dispatch(Notifications.success({
        title: 'Success!',
        message: data.message,
        position: 'tr',
        autoDismiss: 3,
      }));
      dispatch(push('/login'));
      return data;
    })
    .catch(dispatchError(dispatch));
