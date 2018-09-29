import update from 'immutability-helper';
import * as R from 'ramda';

import {
  SET_TODOS, ADD_TODO, TOGGLE_COMPLETE_TODO, UPDATE_TODO, HIDE_TODO, DELETE_TODO,
} from '../actions/todos';

export function todo(state = {
  completed: false,
  hidden: false,
}, action) {
  switch (action.type) {
    case ADD_TODO:
      return update(state, {
        id: { $set: action.id },
        text: { $set: action.text },
        createdAt: { $set: action.createdAt },
      });
    case TOGGLE_COMPLETE_TODO:
      return update(state, {
        completed: { $apply: x => !x },
      });
    case UPDATE_TODO:
      return update(state, {
        text: { $set: action.text },
        updatedAt: { $set: action.updatedAt },
      });
    case HIDE_TODO:
      return update(state, {
        hidden: { $set: true },
      });
    default:
      return state;
  }
}

export default function todos(state = [], action) {
  const index = R.findIndex(R.propEq('id', action.id), state);
  const updatedAtIndex = { $splice: [[index, 1, todo(state[index], action)]] };

  switch (action.type) {
    case SET_TODOS:
      return update(state, { $set: action.todos });
    case ADD_TODO:
      return update(state, { $push: [todo(undefined, action)] });
    case TOGGLE_COMPLETE_TODO:
      return update(state, updatedAtIndex);
    case UPDATE_TODO:
      return update(state, updatedAtIndex);
    case HIDE_TODO:
      return update(state, updatedAtIndex);
    case DELETE_TODO:
      return update(state, { $splice: [[index, 1]] });
    default:
      return state;
  }
}
