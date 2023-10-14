import update from 'immutability-helper';
import R from 'ramda';

import {
  ADD_TODO, REMOVE_TODO, SET_TODOS, TOGGLE_COMPLETE_TODO, UPDATE_TODO,
} from '_store/actions/todos';
import { LOGOUT_USER } from '_store/actions/user';

export function todo(state = {
  completed: false,
}, action) {
  switch (action.type) {
    case ADD_TODO:
      return update(state, {
        id: { $set: action.payload.id },
        text: { $set: action.payload.text },
        createdAt: { $set: action.payload.createdAt },
      });
    case TOGGLE_COMPLETE_TODO:
      return update(state, {
        completed: { $apply: x => !x },
      });
    case UPDATE_TODO:
      return update(state, {
        text: { $set: action.payload.text },
        updatedAt: { $set: action.payload.updatedAt },
      });
    default:
      return state;
  }
}

export default function todos(state = [], action) {
  const index = R.findIndex(R.propEq(action.payload?.id, 'id'), state);
  const updatedAtIndex = { $splice: [[index, 1, todo(state[index], action)]] };

  switch (action.type) {
    case SET_TODOS:
      return update(state, { $set: action.payload.todos });
    case ADD_TODO:
      return update(state, { $push: [todo(undefined, action)] });
    case TOGGLE_COMPLETE_TODO:
      return update(state, updatedAtIndex);
    case UPDATE_TODO:
      return update(state, updatedAtIndex);
    case REMOVE_TODO:
      return update(state, { $splice: [[index, 1]] });
    case LOGOUT_USER:
      return [];
    default:
      return state;
  }
}
