import { expect } from 'chai';
import { SET_ACTIVE, SET_INACTIVE, setActive, setInactive } from './search';

describe('setActive', () => {
  it('returns type SET_ACTIVE', () => {
    expect(setActive()).to.deep.equal({ type: SET_ACTIVE });
  });
});

describe('setInactive', () => {
  it('returns type SET_ACTIVE', () => {
    expect(setInactive()).to.deep.equal({ type: SET_INACTIVE });
  });
});
