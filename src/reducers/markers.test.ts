import { expect } from 'chai';
import { addMarker, initialState, markersReducer, visitMarker } from './markers';

describe('initialState', () => {
  it('should be an object', () => {
    expect(initialState).to.be.an('object');
  });

  it('should initialize results with an empty map', () => {
    expect(initialState.markers.size).to.equal(0);
  });
});

describe('markersReducer', () => {
  it('should be a function', () => {
    expect(markersReducer).to.be.a('function');
  });
});

describe('addMarker', () => {
  let action: any;
  let state: any;

  beforeEach(() => {
    action = {
      id: 200,
      marker: {}
    };

    state = {
      markers: new Map<number, any>();
    };
  });

  it('returns a state', () => {
    expect(addMarker(state, action)).to.have.property('markers');
  });

  it('adds marker to map', () => {
    const map = addMarker(state, action).markers;
    expect(map.get(action.id)).to.equal(action.marker);
  });
});

describe('visitMarker', () => {
  const marker = {};
  const action = { id: 200, type: 'ignore' };
  const state = { markers: null, active: null };

  beforeEach(() => {
    action.id = 200;
    state.active = null;
    state.markers = new Map<number, any>();
    state.markers.set(action.id, marker);
  });

  it('updates active property', () => {
    // @ts-ignore
    const s = visitMarker(state, action);
    expect(s.active).to.equal(marker);
  })
});