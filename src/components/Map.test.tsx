import { expect } from 'chai';
import * as React from 'react';
import Permissions from 'react-native-permissions';
import * as TestRenderer from 'react-test-renderer';
import { MapComponent } from './Map';
jest.mock('react-native-permissions');

describe('initialize', () => {
  let props: MapComponentProps;

  beforeEach(() => {
    const points: PointState = {
      error: false,
      fetching: false,
      lastUpdated: null,
      results: []
    };

    props = {
      points,
      updatePoints: jest.fn()
    };
  });

  it('constructs', () => {
    const map = new MapComponent(props);

    expect(map).to.be.an('object');
  });

  it('renders', () => {
    TestRenderer.create(<MapComponent {...props} />).toJSON();
  });
});

describe('fetch points', () => {
  let updatePointsMock: jest.Mock;
  let props: MapComponentProps;

  beforeEach(() => {
    updatePointsMock = jest.fn();

    const points: PointState = {
      error: false,
      fetching: false,
      lastUpdated: null,
      results: []
    };

    props = {
      points,
      updatePoints: updatePointsMock
    };
  });

  it('during construction', () => {
    TestRenderer.create(<MapComponent {...props} />);
    expect(updatePointsMock.mock.calls.length).to.equal(1);
  });
});

describe('location', () => {
  // @ts-ignore
  const permissionsMock = Permissions as PermissionsMock;
  let props: MapComponentProps;

  beforeEach(() => {
    const points: PointState = {
      error: false,
      fetching: false,
      lastUpdated: null,
      results: []
    };

    props = {
      points,
      updatePoints: jest.fn()
    };

    permissionsMock.check.mockClear();
    permissionsMock.check.mockResolvedValue('authorized');
    // @ts-ignore
    navigator.geolocation.getCurrentPosition.mockClear();
  });

  it('checks permission on mount', () => {
    const instance = TestRenderer.create(<MapComponent {...props} />);
    expect(permissionsMock.check.mock.calls.length).to.equal(1);
  });

  // it('fetches current position', () => {
  //   const instance = TestRenderer.create(<MapComponent {...props} />);

  //   // @ts-ignore
  //   const calls = navigator.geolocation.getCurrentPosition.mock.calls;
  //   expect(calls.length).to.equal(1);
  // });
});
