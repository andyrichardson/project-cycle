import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';

export class MapComponent extends React.Component<any> {
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
        provider={'google'}
      />
    );
  }

  // public componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     position => this.updatePosition(position),
  //     error => this.navigationError(error),
  //     { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
  //   );
  // }

  // private get region() {
  //   if (this.latitude === undefined) {
  //     return null;
  //   }

  //   return {
  //     latitude: this.latitude,
  //     latitudeDelta: 0,
  //     longitude: this.longitude,
  //     longitudeDelta: 0
  //   };
  // }

  // @action
  // private updatePosition(position: Position): void {
  //   this.latitude = position.coords.latitude;
  //   this.longitude = position.coords.longitude;
  // }

  // @action
  // private navigationError(error) {
  //   this.error = error;
  // }
}
