import Notifications from 'react-notification-system-redux';

import { getUser, putUser, putUserPassword } from '_api/user';
import { updateUser } from '_actions/user';

import { dispatchError } from '_utils/api';

export const attemptGetUser = () => dispatch =>
  getUser()
    .then(data => {
      dispatch(updateUser(data.user));
      return data.user;
    })
    .catch(dispatchError(dispatch));

export const attemptUpdateUser = updatedUser => dispatch =>
  putUser(updatedUser)
    .then(data => {
      dispatch(updateUser(data.user));
      dispatch(Notifications.success({
        title: 'Success!',
        message: data.message,
        position: 'tr',
        autoDismiss: 3,
      }));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptUpdatePassword = passwordInfo => dispatch =>
  putUserPassword(passwordInfo)
    .then(data => {
      dispatch(Notifications.success({
        title: 'Success!',
        message: data.message,
        position: 'tr',
        autoDismiss: 3,
      }));
      return data;
    })
    .catch(dispatchError(dispatch));
