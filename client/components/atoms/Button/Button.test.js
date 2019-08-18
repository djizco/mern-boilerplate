import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

const wrapper = shallow(<Button />);

describe('<Button />', () => {
  test('Renders as a <button> element', () => {
    expect(wrapper.type()).toEqual('button');
  });
});
