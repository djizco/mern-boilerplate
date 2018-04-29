import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import { reducer as alerts } from 'react-notification-system-redux';
import user from './user';

const rootReducer = combineReducers({
  routing,
  alerts,
  user,
});

export default rootReducer;
