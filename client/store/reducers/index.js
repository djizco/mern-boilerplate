import { combineReducers } from 'redux';

import user from './user';
import todos from './todos';

const createRootReducer = routerReducer => combineReducers({
  router: routerReducer,
  user,
  todos,
});

export default createRootReducer;
