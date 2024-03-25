import React from 'react';
import { shallow } from 'enzyme';
import Duepayment from './Duepayment';

describe('<Duepayment />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Duepayment />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
