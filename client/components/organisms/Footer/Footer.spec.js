import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

const wrapper = shallow(<Footer />);

describe('<Footer />', () => {
  test('renders as a <footer> element', () => {
    expect(wrapper.type()).toBe('footer');
  });
});
