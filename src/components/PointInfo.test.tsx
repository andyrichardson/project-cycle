import { expect } from 'chai';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { PointInfoComponent } from './PointInfo';
jest.mock('react-native-percentage-circle', () => ({
  default: 'react-native-percentage'
}));
jest.useFakeTimers();

describe('initialize', () => {
  let point: BikePoint;
  let visible: boolean;

  beforeEach(() => {
    // @ts-ignore
    point = {
      bikes: {
        available: 2,
        total: 20
      },
      id: '1234',
      location: {
        latitude: 0.5,
        longitude: 0.2
      }
    };

    visible = true;
  });

  it('constructs', () => {
    const marker = new PointInfoComponent({ point, visible });

    expect(marker).to.be.an('object');
  });

  it('renders', () => {
    TestRenderer.create(
      <PointInfoComponent point={point} visible={visible} />
    ).toJSON();
  });
});

describe('visibility', () => {
  let point: BikePoint;
  let visible: boolean;

  beforeEach(() => {
    // @ts-ignore
    point = {
      bikes: {
        available: 2,
        total: 20
      },
      id: '1234',
      location: {
        latitude: 0.5,
        longitude: 0.2
      }
    };

    visible = true;
  });

  describe('slide in', () => {
    it('on mount', () => {
      const marker = new PointInfoComponent({ point, visible });
      // @ts-ignore
      const spy = jest.spyOn(marker, 'slideIn');

      marker.componentDidMount();
      expect(spy.mock.calls.length).to.equal(1);
    });

    it('visibility = false => true', () => {
      const marker = new PointInfoComponent({ point, visible: false });
      marker.componentDidMount();

      // @ts-ignore
      const spy = jest.spyOn(marker, 'slideIn');

      // @ts-ignore
      marker.props.visible = true;
      marker.componentDidUpdate({});

      expect(spy.mock.calls.length).to.equal(1);
    });

    it('visibility = false => false [not]', () => {
      const marker = new PointInfoComponent({ point, visible: false });
      marker.componentDidMount();

      // @ts-ignore
      const spy = jest.spyOn(marker, 'slideIn');

      // @ts-ignore
      marker.props.visible = false;
      marker.componentDidUpdate({});

      expect(spy.mock.calls.length).to.equal(0);
    });
  });

  describe('slide out', () => {
    it('on mount [not]', () => {
      const marker = new PointInfoComponent({ point, visible: true });
      // @ts-ignore
      const spy = jest.spyOn(marker, 'slideOut');

      marker.componentDidMount();
      expect(spy.mock.calls.length).to.equal(0);
    });

    it('visibility = true => false', () => {
      const marker = new PointInfoComponent({ point, visible: true });
      marker.componentDidMount();

      // @ts-ignore
      const spy = jest.spyOn(marker, 'slideOut');

      // @ts-ignore
      marker.props.visible = false;
      marker.componentDidUpdate({});

      expect(spy.mock.calls.length).to.equal(1);
    });

    it('visibility = true => true [not]', () => {
      const marker = new PointInfoComponent({ point, visible: true });
      marker.componentDidMount();

      // @ts-ignore
      const spy = jest.spyOn(marker, 'slideOut');

      // @ts-ignore
      marker.props.visible = true;
      marker.componentDidUpdate({});

      expect(spy.mock.calls.length).to.equal(0);
    });
  });
});

describe('content', () => {
  let point: BikePoint;
  let visible: boolean;

  beforeEach(() => {
    // @ts-ignore
    point = {
      bikes: {
        available: 2,
        total: 20
      },
      id: '1234',
      location: {
        latitude: 0.5,
        longitude: 0.2
      }
    };

    visible = true;
  });

  it('shows bike count', () => {
    const text = TestRenderer.create(
      <PointInfoComponent point={point} visible={visible} />
    ).root.findAllByType('Text');

    const matches = text.some(
      t =>
        t.children !== undefined
          ? t.children.toString() === `${point.bikes.available}, Bikes`
          : false
    );

    expect(matches).to.equal(true);
  });

  it('shows space count', () => {
    const text = TestRenderer.create(
      <PointInfoComponent point={point} visible={visible} />
    ).root.findAllByType('Text');

    const matches = text.some(
      t =>
        t.children !== undefined
          ? t.children.toString() ===
            `${point.bikes.total - point.bikes.available}, Spaces`
          : false
    );

    expect(matches).to.equal(true);
  });
});
