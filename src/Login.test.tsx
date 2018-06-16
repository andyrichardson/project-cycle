import { expect } from 'chai';
import * as React from 'react';
import * as ReactTestUtils from 'react-dom/test-utils';
import * as TestRenderer from 'react-test-renderer';
import { Login } from './Login';

it('renders without crashing', () => {
  const rendered = TestRenderer.create(
    // @ts-ignore
    <Login authStore={jest.fn()} />
  ).toJSON();
});

// describe('rendering', () => {});
// console.log(instance.root.find((a) => a.type.displayName === 'Styled(TextInput)');

describe('input events', () => {
  let authStore: any;
  // @ts-ignore
  let instance = TestRenderer.create();

  beforeEach(() => {
    authStore = {};
    instance = TestRenderer.create(
      // @ts-ignore
      <Login authStore={authStore} />
    );
  });

  it('sends email input to authStore', () => {
    authStore.setEmail = jest.fn();
    const input: any = instance.root.find(
      child =>
        child.props.placeholder !== undefined &&
        child.props.placeholder.toLowerCase().includes('email')
    );

    const text = 'testtext';
    input.instance.props.onChangeText(text);
    expect(authStore.setEmail.mock.calls).to.deep.equal([[text]]);
  });

  it('sends password input to authStore', () => {
    authStore.setPassword = jest.fn();
    const input: any = instance.root.find(
      child =>
        child.props.placeholder !== undefined &&
        child.props.placeholder.toLowerCase().includes('password')
    );

    const text = 'passpass';
    input.instance.props.onChangeText(text);
    expect(authStore.setPassword.mock.calls).to.deep.equal([[text]]);
  });

  // it('triggers submission on click', () => {
  //   authStore.login = jest.fn();
  //   const button: any = instance.root.find(
  //     child =>
  //       child.type.displayName === 'Styled(TouchableHighlight)' &&
  //       child.props.children.props.children === 'Login'
  //   );
  // });
});
it('directs to Login page on startup', () => {
  // const rendered = TestRenderer.create(<App />);
  // console.log(rendered.root.findByType(Login));
});
