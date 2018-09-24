import React from 'react';
import { shallow } from 'enzyme';

import NavigationContainer from './NavigationContainer';

const wrapper = shallow(<NavigationContainer user={{}} pathname="/" />);

describe('<NavigationContainer />', () => {
  test('renders without errors', () => {
    expect(wrapper).toBeDefined();
  });
});
