import { expect } from 'chai';
import {
  ACTIVATE_SEARCH,
  DEACTIVATE_SEARCH,
  activateSearch,
  deactivateSearch
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
