import React from 'react';
import renderer from 'react-test-renderer';
import { Hourglass } from '..';

it('renders correctly', () => {
  const tree = renderer.create(<Hourglass />).toJSON();
  expect(tree).toMatchSnapshot();
});
