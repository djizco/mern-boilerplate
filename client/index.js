import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'font-awesome-webpack';
import '_styles/index.scss';
import '_assets';

import Root from '_environment/Root';
import routes from './routes';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} routes={routes} />,
  document.getElementById('app'),
);
