import React from 'react';
import Lab from 'lab';
import { expect } from 'code';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from '../../../../client/components/structures/Footer/Footer';

Enzyme.configure({ adapter: new Adapter() });

const lab = Lab.script();
const { experiment, test } = lab;

exports.lab = lab;

const wrapper = shallow(<Footer />);

experiment('<Footer />', () => {
  test('renders as a <footer> element', () => {
    expect(wrapper.type()).to.equal('footer');
  });
});
