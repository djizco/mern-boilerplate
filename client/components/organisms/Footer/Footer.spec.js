import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './Footer';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<Footer />);

describe('<Footer />', () => {
  test('renders as a <footer> element', () => {
    expect(wrapper.type()).toBe('footer');
  });
});
