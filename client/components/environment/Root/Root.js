import React from 'react';
import { Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import Main from '_environment/Main';

import configureStore from '_store/configureStore';

const history = createBrowserHistory();
const store = configureStore(history);

export default function Root() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Main />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}
