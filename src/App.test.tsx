import * as React from 'react';
import * as ReactTestUtils from 'react-dom/test-utils';
import * as TestRenderer from 'react-test-renderer';
import App from './App';
import { Login } from './Login';

it('renders without crashing', () => {
  const rendered = TestRenderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('directs to Login page on startup', () => {
  // const rendered = TestRenderer.create(<App />);
  // console.log(rendered.root.findByType(Login));
});
