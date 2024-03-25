import React from 'react';
import { shallow } from 'enzyme';
import Toast from './Toast';

describe('<Toast />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Toast />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
