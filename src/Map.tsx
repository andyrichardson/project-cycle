import { action, computed, observable } from 'mobx';
import { inject, observer, Provider } from 'mobx-react';
import * as React from 'react';
import { Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import { PointStore } from './stores';

@inject('pointStore')
@observer
export class Map extends React.Component<{ pointStore?: PointStore }> {
  @observable private latitude: number;
  @observable private longitude: number;
  @observable private error: false;

  public render() {
    return (
      <MapView
        style={{
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0
        }}
        showsCompass={true}
        initialRegion={this.region}
        loadingEnabled={true}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {this.props.pointStore.points.map(point => (
          <Marker
            key={point.id}
            coordinate={{ latitude: point.lat, longitude: point.lon }}
          />
        ))}
      </MapView>
    );
  }

  @action
  public componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => this.updatePosition(position),
      error => this.navigationError(error),
      { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
    );
  }

  @computed
  private get region() {
    if (this.latitude === undefined) {
      return null;
    }

    return {
      latitude: this.latitude,
      latitudeDelta: 0,
      longitude: this.longitude,
      longitudeDelta: 0
    };
  }

  @action
  private updatePosition(position: Position): void {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
  }

  @action
  private navigationError(error) {
    this.error = error;
  }
}

const PageView = styled.View``;

// const MapView = styled.MapView``;
