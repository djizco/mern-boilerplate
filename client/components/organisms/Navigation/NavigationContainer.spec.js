import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationContainer from './NavigationContainer';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<NavigationContainer user={{}} pathname="/" />);

describe('<NavigationContainer />', () => {
  test('renders as a <nav> element', () => {
    expect(wrapper.type()).toBe('nav');
  });
});
