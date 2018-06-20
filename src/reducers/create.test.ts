import { expect } from 'chai';
import { createReducer } from './create';

describe('createReducer', () => {
  it('returns a function', () => {
    // @ts-ignore
    expect(createReducer({}, {})).to.be.a('function');
  });
});

describe('resulting reducer', () => {
  it('calls mapped function', () => {
    const fn = jest.fn();
    const reducer = createReducer({}, { fn });

    reducer({}, { type: 'fn' });
    expect(fn.mock.calls.length).to.equal(1);
  });

  it('returns mapped function value', () => {
    const value = Math.random();
    const fn = jest.fn().mockReturnValue(value);
    const reducer = createReducer({}, { fn });

    const val = reducer({}, { type: 'fn' });
    expect(val).to.equal(value);
  });

  it('returns state when no action is found', () => {
    const state = {};
    const fn = jest.fn();
    const reducer = createReducer({}, { fn });

    // @ts-ignore
    const val = reducer(state, { type: 'unspecified-action' });
    expect(val).to.equal(state);
  });
});
