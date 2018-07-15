import { expect } from 'chai';
import {
  ACTIVATE_SEARCH,
  activateSearch,
  DEACTIVATE_SEARCH,
  deactivateSearch,
  FILTER_SEARCH,
  filterSearch
} from './search';

describe('activateSearch', () => {
  it('returns type ACTIVATE_SEARCH', () => {
    expect(activateSearch()).to.deep.equal({ type: ACTIVATE_SEARCH });
  });
});

describe('deactivateSearch', () => {
  it('returns type ACTIVATE_SEARCH', () => {
    expect(deactivateSearch()).to.deep.equal({ type: DEACTIVATE_SEARCH });
  });
});

describe('filterSearch', () => {
  it('returns type FILTER_SEARCH', () => {
    expect(filterSearch('')).to.contain({ type: FILTER_SEARCH });
  });

  it('returns query text', () => {
    const text = 'mytext';
    expect(filterSearch(text)).to.contain({ query: text });
  });
});
