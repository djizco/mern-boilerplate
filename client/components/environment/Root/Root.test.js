import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import configureStore from '_store/configureStore';

import Root from './Root';

const history = createBrowserHistory();
const store = configureStore(history);

describe('Root Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Root history={history} store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
