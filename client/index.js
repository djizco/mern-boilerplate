import React from 'react';
import { render } from 'react-dom';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.compat.css';

import history from '_client/history';
import store from '_client/store';

import Root from '_environment/Root';

render(
  <Root history={history} store={store} />,
  document.getElementById('app'),
);
