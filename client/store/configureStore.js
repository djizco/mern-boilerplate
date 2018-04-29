import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({ collapsed: true, diff: true });
  middlewares.push(logger);
}

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares),
  );
}
