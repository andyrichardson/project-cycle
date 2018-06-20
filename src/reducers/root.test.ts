import { expect } from 'chai';
import { rootReducer } from './root';

describe('rootReducer', () => {
  it('returns an object', () => {
    // @ts-ignore
    expect(rootReducer({}, {})).to.be.an('object');
  });

  it('returns a points property', () => {
    // @ts-ignore
    expect(rootReducer({}, {}).hasOwnProperty('points')).to.equal(true);
  });
});
