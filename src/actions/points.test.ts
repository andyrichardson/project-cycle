import { expect } from 'chai';
import * as React from 'react';
import { updatePoints } from './points';

declare const fetch: jest.Mock;

describe('updatePoints', () => {
  beforeEach(() => {
    fetch.mockClear();
    fetch.mockResolvedValue({
      json: () => require('./__api__/bikepoint.json')
    });
  });

  it('returns a function', () => {
    const result = updatePoints(jest.fn());

    expect(result).to.be.a('promise');
  });

  it('returned function calls dispatch', () => {
    const fn = jest.fn();

    const f = updatePoints(fn);
    f.catch(() => true);

    expect(fn.mock.calls.length).to.equal(1);
  });

  it('returned function calls fetch', () => {
    // @ts-ignore
    const f = updatePoints(jest.fn());
    f.catch(() => true);

    expect(fetch.mock.calls[0][0]).to.be.a('string');
  });
});
