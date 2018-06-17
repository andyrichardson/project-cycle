import { expect } from 'chai';
import * as React from 'react';
import * as ReactTestUtils from 'react-dom/test-utils';
import * as TestRenderer from 'react-test-renderer';
import { AuthStore } from './index';

it('instantitates without crashing', () => {
  const authStore = new AuthStore();
});

describe('initial state', () => {
  let authStore: AuthStore;

  beforeEach(() => {
    authStore = new AuthStore();
  });

  it('returns blank email', () => {
    expect(authStore.email).to.equal('');
  });

  it('returns a blank password', () => {
    // @ts-ignore
    expect(authStore.password).to.equal('');
  });

  it('is not authenticated', () => {
    expect(authStore.isAuthenticated).to.equal(false);
  });
});

describe('functions', () => {
  let authStore: AuthStore;

  beforeEach(() => {
    authStore = new AuthStore();
  });

  it('sets email', () => {
    const email = 'testemail@email.com';
    authStore.setEmail(email);

    expect(authStore.email).to.equal(email);
  });

  it('sets password', () => {
    const password = 'mypassword';
    authStore.setPassword(password);

    // @ts-ignore
    expect(authStore.password).to.equal(password);
  });
});
