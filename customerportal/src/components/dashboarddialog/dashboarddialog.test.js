import React from 'react';
import { shallow } from 'enzyme';
import Dashboarddialog from './Dashboarddialog';

describe('<Dashboarddialog />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Dashboarddialog />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
