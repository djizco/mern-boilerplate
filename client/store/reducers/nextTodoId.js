import * as R from 'ramda';
import { INCREMENT_TODO_ID } from '../actions/todos';

export default function nextTodoId(state = 1, action) {
  switch (action.type) {
    case INCREMENT_TODO_ID:
      return R.add(state, 1);
    default:
      return state;
  }
}
