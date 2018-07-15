import { expect } from 'chai';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Map } from './Map';
jest.mock('../components');

describe('initialize', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let store: any;

  beforeEach(() => {
    store = mockStore({
      points: [],
      search: {
        active: false
      }
    });
  });

  it('constructs', () => {
    const map = new Map({ store });

    expect(map).to.be.an('object');
  });

  it('renders', () => {
    const rendered = TestRenderer.create(
      // @ts-ignore
      <Map store={store} />
    ).toJSON();
  });
});
