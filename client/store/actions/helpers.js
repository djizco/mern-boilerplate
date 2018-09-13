import { browserHistory } from 'react-router';
import Notifications from 'react-notification-system-redux';

import { logout } from '_actions/user';


export const handleError = dispatch => res => {
  if (res.status === 401) {
    dispatch(logout());
    browserHistory.push('/login');
  }

  dispatch(Notifications.error({
    title: `Error: ${res.status}`,
    message: res.body.message,
    position: 'tr',
    autoDismiss: 5,
  }));

  throw res;
};

export const handleLoginError = dispatch => res => {
  dispatch(Notifications.error({
    title: `Error: ${res.status}`,
    message: res.body.message,
    position: 'tr',
    autoDismiss: 5,
  }));

  throw res;
};
