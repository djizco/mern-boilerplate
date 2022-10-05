import React from 'react';
import { render } from '@testing-library/react';

import { store, history } from '_store';

import Root from './Root';

describe('Root Component', () => {
  it('renders without crashing', () => {
    render(<Root history={history} store={store} />);
  });
});
