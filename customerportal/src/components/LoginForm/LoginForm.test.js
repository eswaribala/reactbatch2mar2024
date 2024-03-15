import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LoginForm />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
