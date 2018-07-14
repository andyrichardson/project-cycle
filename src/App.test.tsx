import { expect } from 'chai';
import * as React from 'react';
import * as ReactTestUtils from 'react-dom/test-utils';
import * as TestRenderer from 'react-test-renderer';
import App from './App';
import { Login } from './Login';
jest.mock('./actions');

it('renders without crashing', () => {
  const rendered = TestRenderer.create(<App />).toJSON();
  expect(rendered).to.be.an('object');
});

it('directs to Login page on startup', () => {
  // const rendered = TestRenderer.create(<App />);
  // console.log(rendered.root.findByType(Login));
});
