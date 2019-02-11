import React from 'react';
import { render } from 'react-dom';

import '_utils/polyfill';

import Root from '_environment/Root';

render(
  <Root />,
  document.getElementById('app'),
);
