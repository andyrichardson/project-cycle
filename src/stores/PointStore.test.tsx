import * as React from 'react';
import * as ReactTestUtils from 'react-dom/test-utils';
import * as TestRenderer from 'react-test-renderer';

import { PointStore } from './index';
it('instantitates without crashing', () => {
  const pointStore = new PointStore();
});

describe('initial state', () => {
  let pointStore: PointStore;

  beforeEach(() => {
    pointStore = new PointStore();
  });

  it('is not fetching', () => {
    expect(pointStore.isFetching).toBe(false);
  });

  it('has no results', () => {
    expect(pointStore.points).toBe(undefined);
  });
});

describe('fetch points', () => {
  let pointStore: PointStore;

  beforeEach(() => {
    pointStore = new PointStore();
  });

  it('fetches points and resolves', () => {
    return pointStore.fetchAll();
  });

  it('fetches points and updates fetching state', () => {
    return (
      pointStore
        .fetchAll()
        // @ts-ignore
        .then(() => expect(pointStore.fetching).toBe(false))
    );
  });

  it('fetches points and provides response', () => {
    return pointStore
      .fetchAll()
      .then(() => expect(pointStore.points.length).toBeGreaterThanOrEqual(10));
  });
});
