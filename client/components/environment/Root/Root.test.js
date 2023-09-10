import React from 'react';

import { render } from '@testing-library/react';

import { history, store } from '_store';

import Root from './Root';

describe('Root Component', () => {
  it('renders without crashing', () => {
    render(<Root history={history} store={store} />);
  });
});
