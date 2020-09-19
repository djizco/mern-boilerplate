import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';
import todos from './todos';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  user,
  todos,
});

export default createRootReducer;
