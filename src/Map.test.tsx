import { expect } from 'chai';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { Map } from './Map';

it('renders without crashing', () => {
  const rendered = TestRenderer.create(
    // @ts-ignore
    <Map pointStore={{ points: [] }} />
  ).toJSON();

  expect(rendered).to.be.an('object');
});

describe('markers', () => {
  it('adds to mapview from store', () => {
    const points = [{ id: 1, lat: 10, lon: 20 }, { id: 2, lat: 10, lon: 20 }];

    const rendered = TestRenderer.create(
      // @ts-ignore
      <Map pointStore={{ points }} />
    ).toJSON();

    expect(rendered.children.length).to.equal(points.length);
  });

  it('correctly adds latitude', () => {
    const points = [{ id: 1, lat: 10, lon: 20 }];

    const rendered = TestRenderer.create(
      // @ts-ignore
      <Map pointStore={{ points }} />
    ).toJSON();

    const coordinate = rendered.children[0].props.coordinate;
    expect(coordinate.latitude).to.equal(points[0].lat);
  });

  it('correctly adds longitude', () => {
    const points = [{ id: 1, lat: 10, lon: 20 }];

    const rendered = TestRenderer.create(
      // @ts-ignore
      <Map pointStore={{ points }} />
    ).toJSON();

    const coordinate = rendered.children[0].props.coordinate;
    expect(coordinate.longitude).to.equal(points[0].lon);
  });
});
