import { inject, observer, Provider } from 'mobx-react';
import * as React from 'react';
import { Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components/native';

@inject('pointStore')
@observer
export class Map extends React.Component<{}> {
  public render() {
    return (
      <MapView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        {this.props.pointStore.points.map(point => (
          <Marker coordinate={{ latitude: point.lat, longitude: point.lon }} />
        ))}
      </MapView>
    );
  }
}

const PageView = styled.View``;

// const MapView = styled.MapView``;
