import React from 'react';
import { render } from 'react-dom';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import history from '_client/history';
import store from '_client/store';

import Root from '_environment/Root';

render(
  <Root history={history} store={store} />,
  document.getElementById('app'),
);
