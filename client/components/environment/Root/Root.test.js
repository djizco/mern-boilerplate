import React from 'react';
import { createRoot } from 'react-dom/client';

import { store, history } from '_store';

import Root from './Root';

describe('Root Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    const root = createRoot(div);

    root.render(<Root history={history} store={store} />);
    root.unmount();
  });
});
