import React from 'react';
import { render } from 'react-dom';

import '_utils/polyfill';

import history from '_client/history';
import store from '_client/store';

import Root from '_environment/Root';

render(
  <Root history={history} store={store} />,
  document.getElementById('app'),
);
