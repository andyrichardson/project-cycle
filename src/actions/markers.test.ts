import { expect } from 'chai';
import { addMarker, visitMarker } from './markers';

describe('addMarker', () => {
  let marker = {};
  let id = 200;

  beforeEach(() => {
    marker = {};
    id = 200;
  });

  it('ignores null marker', () => {
    expect(addMarker(id, null)).to.equal(undefined);
  });

  it('returns action when marker is valid', () => {
    // @ts-ignore
    const action = addMarker(id, marker);

    expect(action).to.deep.equal({
      id,
      marker,
      type: 'ADD_MARKER'
    });
  });
});

describe('visitMarker', () => {
  it('returns visit marker action', () => {
    const id = 1;
    expect(visitMarker(id)).to.deep.equal({
      id,
      type: 'VISIT_MARKER'
    });
  });
});
