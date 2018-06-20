import { expect } from 'chai';
import {
  fetchPoints,
  initialState,
  pointsReducer,
  receivePoints
} from './points';

describe('initialState', () => {
  it('should be an object', () => {
    expect(initialState).to.be.an('object');
  });

  it('should initialize results with an empty array', () => {
    expect(initialState.results).to.deep.equal([]);
  });
});

describe('pointsReducer', () => {
  it('should be a function', () => {
    expect(pointsReducer).to.be.a('function');
  });
});

describe('fetchPoints', () => {
  it('should return a state', () => {
    const state = {};

    // @ts-ignore
    expect(fetchPoints(state)).to.be.an('object');
  });

  it('should set error to false', () => {
    const state = { error: true };

    // @ts-ignore
    expect(fetchPoints(state).error).to.equal(false);
  });

  it('should set fetching to true', () => {
    const state = { fetching: false };

    // @ts-ignore
    expect(fetchPoints(state).fetching).to.equal(true);
  });
});

describe('receivePoints', () => {
  it('should return a state', () => {
    const state = {};
    const action = { receivedAt: new Date() };

    // @ts-ignore
    expect(receivePoints(state, action)).to.be.an('object');
  });

  it('should change fetching status to false', () => {
    const state = { fetching: true };
    const action = { receivedAt: new Date() };

    // @ts-ignore
    expect(receivePoints(state, action).fetching).to.equal(false);
  });

  it('should change error status to false', () => {
    const state = { error: true };
    const action = { receivedAt: new Date() };

    // @ts-ignore
    expect(receivePoints(state, action).error).to.equal(false);
  });
});
