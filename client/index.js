import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';

import '_utils/polyfill';

import Root from '_environment/Root';
import configureStore from '_store/configureStore';

const history = createBrowserHistory();
const store = configureStore(history, {});

render(
  <Root store={store} history={history} />,
  document.getElementById('app'),
);
