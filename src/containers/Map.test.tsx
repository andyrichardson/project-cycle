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

describe('stateToProps', () => {
  const MapComponent = require('../components').MapComponent as jest.Mock;
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let store: any;

  beforeEach(() => {
    MapComponent.mockClear();

    store = mockStore({
      points: [],
      search: {
        active: false
      }
    });
  });

  it('points', () => {
    TestRenderer.create(<Map store={store} />).toJSON();

    expect(MapComponent.mock.calls[0][0].points).to.equal(
      store.getState().points
    );
  });

  it('searchActive', () => {
    TestRenderer.create(<Map store={store} />).toJSON();

    expect(MapComponent.mock.calls[0][0].searchActive).to.equal(
      store.getState().search.active
    );
  });
});

describe('dispatchToProps', () => {
  const MapComponent = require('../components').MapComponent as jest.Mock;
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let store: any;

  beforeEach(() => {
    MapComponent.mockClear();

    store = mockStore({
      points: [],
      search: {
        active: false
      }
    });
  });

  it('updatePoints', () => {
    TestRenderer.create(<Map store={store} />).toJSON();

    expect(MapComponent.mock.calls[0][0].updatePoints).to.be.a('function');
  });
});
