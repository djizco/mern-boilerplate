import { combineReducers } from 'redux';

import { reducer as alerts } from 'react-notification-system-redux';
import user from './user';
import todos from './todos';
import nextTodoId from './nextTodoId';

const rootReducer = combineReducers({
  alerts,
  user,
  todos,
  nextTodoId,
});

export default rootReducer;
