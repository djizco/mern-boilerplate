import update from 'immutability-helper';
import { LOGIN_USER, LOGOUT_USER, UPDATE_USER } from '_actions/user';

export default function user(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.user;
    case LOGOUT_USER:
      return {};
    case UPDATE_USER:
      return update(state, { $merge: action.user });
    default:
      return state;
  }
}
