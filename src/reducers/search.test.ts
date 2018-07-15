import { expect } from 'chai';
import { initialState, searchReducer, setActive, setInactive } from './search';

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

  it('results is empty array ', () => {
    expect(initialState.results).to.deep.equal([]);
  });
});

describe('searchReducer', () => {
  it('should be a function', () => {
    expect(searchReducer).to.be.a('function');
  });
});

describe('setActive', () => {
  it('sets active = true', () => {
    const state = initialState;
    const result = setActive(state);

    expect(result.active).to.equal(true);
  });
});

describe('setInactive', () => {
  it('sets active = true', () => {
    const state = { ...initialState, active: true };
    const result = setInactive(state);

    expect(result.active).to.equal(false);
  });

  it('clears the query string', () => {
    const state = { ...initialState, query: '1234' };
    const result = setInactive(state);

    expect(result.query).to.equal('');
  });

  it('clears the results', () => {
    const state = { ...initialState, results: [{}, {}] };
    // @ts-ignore
    const result = setInactive(state);

    expect(result.results).to.deep.equal([]);
  });
});
