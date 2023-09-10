import { combineReducers } from 'redux';

import todos from './todos';
import user from './user';

const createRootReducer = routerReducer => combineReducers({
  router: routerReducer,
  user,
  todos,
});

export default createRootReducer;
