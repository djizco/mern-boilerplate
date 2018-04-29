import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'font-awesome-webpack';
import './styles/index.scss';
import './assets';

import Root from './components/Root';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('app'),
);
