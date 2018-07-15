import { expect } from 'chai';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Search } from './Search';
jest.mock('../components/Search');

describe('initialize', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let store: any;

  beforeEach(() => {
    store = mockStore({
      points: { results: [] },
      search: {
        active: false

query: ''      }
    });
  });

  it('constructs', () => {
    const map = new Search({ store });

    expect(map).to.be.an('object');
  });

  it('renders', () => {
    const rendered = TestRenderer.create(
      // @ts-ignore
      <Search store={store} />
    ).toJSON();
  });
});

describe('stateToProps', () => {
  const SearchComponent = require('../components').SearchComponent as jest.Mock;
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let store: any;

  beforeEach(() => {
    SearchComponent.mockClear();

    store = mockStore({
      points: { results: [] },
      search: {
        active: false,
        query: ''
      }
    });
  });

  it('search', () => {
    TestRenderer.create(<Search store={store} />).toJSON();

    expect(SearchComponent.mock.calls[0][0].search).to.deep.equal({
      ...store.getState().search,
      results: []
    });
  });
});

describe('dispatchToProps', () => {
  const SearchComponent = require('../components').SearchComponent as jest.Mock;
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let store: any;

  beforeEach(() => {
    SearchComponent.mockClear();

    store = mockStore({
      points: { results: [] },
      search: {
        active: false,
        query: ''
      }
    });
  });

  it('activateSearch', () => {
    TestRenderer.create(<Search store={store} />).toJSON();

    expect(SearchComponent.mock.calls[0][0].activateSearch).to.be.a('function');
  });

  it('deactivateSearch', () => {
    TestRenderer.create(<Search store={store} />).toJSON();

    expect(SearchComponent.mock.calls[0][0].deactivateSearch).to.be.a('function');
  });

  it('filterSearch', () => {
    TestRenderer.create(<Search store={store} />).toJSON();

    expect(SearchComponent.mock.calls[0][0].filterSearch).to.be.a('function');
  });
});
