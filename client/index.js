import React from 'react';

// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
// import { createRoot } from 'react-dom/client';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.compat.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { history, store } from '_store';

import Root from '_components/environment/Root';

render(
  <Root history={history} store={store} />,
  document.getElementById('app'),
);

// This Enables React 18.
// There is currently an issue in React 18 with notifications.
// Animate.CSS animations will "blink".

// createRoot(document.getElementById('app'))
//   .render(<Root history={history} store={store} />);
