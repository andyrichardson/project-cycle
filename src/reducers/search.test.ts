import { expect } from 'chai';
import {
  activateSearch,
  deactivateSearch,
  filterSearch,
  initialState,
  searchReducer
} from './search';

describe('initialState', () => {
  it('is an object', () => {
    expect(initialState).to.be.an('object');
  });

  it('active = false', () => {
    expect(initialState.active).to.equal(false);
  });

  it('query is empty string', () => {
    expect(initialState.query).to.equal('');
  });
});

describe('searchReducer', () => {
  it('should be a function', () => {
    expect(searchReducer).to.be.a('function');
  });
});

describe('activateSearch', () => {
  it('sets active = true', () => {
    const state = initialState;
    const result = activateSearch(state);

    expect(result.active).to.equal(true);
  });
});

describe('deactivateSearch', () => {
  it('sets active = true', () => {
    const state = { ...initialState, active: true };
    const result = deactivateSearch(state);

    expect(result.active).to.equal(false);
  });

  it('clears the query string', () => {
    const state = { ...initialState, query: '1234' };
    const result = deactivateSearch(state);

    expect(result.query).to.equal('');
  });
});

describe('filterSearch', () => {
  it('adds query to state', () => {
    const query = 'testquery';
    const state = { ...initialState };
    // @ts-ignore
    const result = filterSearch(state, { query });

    expect(result.query).to.equal(query);
  });
});
