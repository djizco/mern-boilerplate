import { Store as RNC } from 'react-notifications-component';

import { getUser, putUser, putUserPassword } from '_api/user';

import { updateUser } from '_store/actions/user';

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

      RNC.addNotification({
        title: 'Success!',
        message: data.message,
        type: 'success',
        insert: 'bottom',
        container: 'top-right',
        animationIn: ['animated', 'fadeInRight'],
        animationOut: ['animated', 'fadeOutRight'],
        dismiss: {
          duration: 5000,
        },
      });

      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptUpdatePassword = passwordInfo => dispatch =>
  putUserPassword(passwordInfo)
    .then(data => {
      RNC.addNotification({
        title: 'Success!',
        message: data.message,
        type: 'success',
        container: 'top-right',
        animationIn: ['animated', 'fadeInRight'],
        animationOut: ['animated', 'fadeOutRight'],
        dismiss: {
          duration: 5000,
        },
      });

      return data;
    })
    .catch(dispatchError(dispatch));
