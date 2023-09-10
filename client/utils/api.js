import { Store as RNC } from 'react-notifications-component';
import { push } from 'redux-first-history';

import { logout } from '_store/actions/user';

export const handleSuccess = resp => resp.body;

export const handleError = error => {
  if (error.response) {
    throw error.response;
  } else {
    const response = { status: 500, body: { message: 'Internal Server error' } };
    throw response;
  }
};

export const dispatchError = dispatch => res => {
  if (res.status === 401) {
    dispatch(logout());
    dispatch(push('/login'));
  }

  RNC.addNotification({
    title: `Error: ${res.status}`,
    message: res.body.message,
    type: 'danger',
    container: 'top-right',
    animationIn: ['animated', 'fadeInRight'],
    animationOut: ['animated', 'fadeOutRight'],
    dismiss: {
      duration: 5000,
    },
  });

  throw res;
};
