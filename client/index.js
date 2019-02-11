import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';

import '_utils/polyfill';

import configureStore from '_store/configureStore';

import Root from '_environment/Root';

const history = createBrowserHistory();
const store = configureStore(history);

render(
  <Root history={history} store={store} />,
  document.getElementById('app'),
);
