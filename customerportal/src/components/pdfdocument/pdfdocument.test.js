import React from 'react';
import { shallow } from 'enzyme';
import Pdfdocument from './Pdfdocument';

describe('<Pdfdocument />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Pdfdocument />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
