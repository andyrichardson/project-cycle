import { expect } from 'chai';
import * as React from 'react';
import * as ReactTestUtils from 'react-dom/test-utils';
import * as TestRenderer from 'react-test-renderer';
import { PointStore } from './index';

declare const fetch: jest.Mock;

it('instantitates without crashing', () => {
  const pointStore = new PointStore();
});

describe('initial state', () => {
  let pointStore: PointStore;

  beforeEach(() => {
    pointStore = new PointStore();
  });

  it('is not fetching', () => {
    expect(pointStore.isFetching).to.equal(false);
  });

  it('has no results', () => {
    expect(pointStore.points).to.deep.equal([]);
  });
});

describe('fetch points', () => {
  let pointStore: PointStore;

  beforeEach(() => {
    pointStore = new PointStore();
    fetch.mockResolvedValue({
      json: () => require('./__api__/bikepoint.json')
    });
  });

  it('fetches points and resolves', () => {
    return pointStore.fetchAll();
  });

  it('fetches points and updates fetching state', () => {
    return (
      pointStore
        .fetchAll()
        // @ts-ignore
        .then(() => expect(pointStore.fetching).to.equal(false))
    );
  });

  it('fetches points and provides response', () => {
    return pointStore
      .fetchAll()
      .then(() => expect(pointStore.points.length).to.be.at.least(10));
  });
});
