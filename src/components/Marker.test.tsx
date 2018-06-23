import { expect } from 'chai';
import * as React from 'react';
import Permissions from 'react-native-permissions';
import * as TestRenderer from 'react-test-renderer';
import { MarkerComponent } from './Marker';
jest.mock('react-native-percentage-circle', () => ({
  default: 'react-native-percentage'
}));

describe('initialize', () => {
  let props: MarkerComponentProps;

  beforeEach(() => {
    // @ts-ignore
    props = {
      point: {
        bikes: {
          available: 10,
          total: 30
        },
        id: 10,
        location: {
          latitude: 1,
          longitude: 2
        }
      }
    };
  });

  it('constructs', () => {
    const marker = new MarkerComponent(props);

    expect(marker).to.be.an('object');
  });

  it('renders', () => {
    TestRenderer.create(<MarkerComponent {...props} />).toJSON();
  });
});

describe('render', () => {
  let props: MarkerComponentProps;

  beforeEach(() => {
    // @ts-ignore
    props = {
      point: {
        bikes: {
          available: 10,
          total: 30
        },
        id: 10,
        location: {
          latitude: 1,
          longitude: 2
        }
      }
    };
  });

  it('returns a marker', () => {
    const marker = TestRenderer.create(<MarkerComponent {...props} />).toJSON();
    expect(marker.type).to.equal('marker');
  });

  it('contains an image', () => {
    const marker = TestRenderer.create(
      <MarkerComponent {...props} />
    ).root.findByType('Image');

    expect(marker).to.be.an('object');
  });

  it('contains "available bikes" text', () => {
    const text = TestRenderer.create(
      <MarkerComponent {...props} />
    ).root.findByType('Text');

    expect(text.children[0]).to.equal(props.point.bikes.available.toString());
  });
});
