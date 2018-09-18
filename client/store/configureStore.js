import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(history, initialState) {
  const middlewares = [routerMiddleware(history), thunk];

  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({ collapsed: true, diff: true });
    middlewares.push(logger);
  }

  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    applyMiddleware(...middlewares),
  );
}
