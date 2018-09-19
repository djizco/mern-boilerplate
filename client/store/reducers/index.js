import { combineReducers } from 'redux';

import { reducer as alerts } from 'react-notification-system-redux';
import user from './user';

const rootReducer = combineReducers({
  alerts,
  user,
});

export default rootReducer;
