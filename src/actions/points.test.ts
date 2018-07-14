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

  it('resolves', () => {
    return updatePoints(jest.fn());
  });

  it('returned function calls dispatch', () => {
    const fn = jest.fn();
    return updatePoints(fn)
      .catch(() => true)
      .then(() => expect(fn.mock.calls.length).is.at.least(1));
  });

  it('returned function calls fetch', () => {
    return updatePoints(jest.fn())
      .catch(() => true)
      .then(() => expect(fetch.mock.calls[0][0]).to.be.a('string'));
  });
});
