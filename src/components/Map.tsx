import * as React from 'react';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps-super-cluster';
import Permissions from 'react-native-permissions';
import styled from 'styled-components/native';

export class MapComponent extends React.Component<
  MapComponentProps,
  MapComponentState
> {
  public state: MapComponentState = {
    error: null,
    latitude: undefined,
    longitude: undefined
  };

  constructor(props: MapComponentProps) {
    super(props);
    this.props.updatePoints();
  }

  public render() {
    if (this.state.longitude === undefined) {
      return <Loading>Wait</Loading>;
    }

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
        data={this.data}
        initialRegion={this.region}
        renderMarker={this.renderMarker}
        renderCluster={this.renderCluster}
        radius={50}
        maxZoom={200}
        showsCompass={true}
        showsUserLocation={true}
        loadingEnabled={true}
        followsUserLocation={true}
      />
    );
  }

  public async componentDidMount() {
    let locPermission = await Permissions.check('location');

    if (locPermission === 'undetermined') {
      locPermission = await Permissions.request('location');
    }

    navigator.geolocation.getCurrentPosition(
      position => this.updatePosition(position),
      err => this.navigationError(err),
      { enableHighAccuracy: false }
    );
  }

  private get region() {
    if (this.state.latitude === undefined) {
      return null;
    }

    return {
      latitude: this.state.latitude,
      latitudeDelta: 0.02,
      longitude: this.state.longitude,
      longitudeDelta: 0.02
    };
  }

  private get data() {
    return this.props.points.results.map((point, index) => ({
      id: index,
      location: { latitude: point.lat, longitude: point.lon }
    }));
  }

  private renderMarker(point) {
    return <Marker key={point.id} coordinate={point.location} />;
  }

  private renderCluster(cluster, onPress) {
    const { pointCount, coordinate } = cluster;

    return (
      <Marker coordinate={coordinate} onPress={onPress}>
        <ClusterView>
          <ClusterText>{pointCount}</ClusterText>
        </ClusterView>
      </Marker>
    );
  }

  private updatePosition(position: Position): void {
    this.setState({
      ...this.state,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }

  private navigationError(error) {
    this.setState({ ...this.state, error });
  }
}

const Loading = styled.Text``;

const ClusterView = styled.View`
  align-items: center;
  background-color: #fff;
  border: solid 2px #f00;
  border-radius: 200px;
  display: flex;
  height: 40px;
  justify-content: center;
  opacity: 0.8;
  width: 40px;
`;

const ClusterText = styled.Text`
  color: #f00;
  font-size: 12px;
  font-weight: 600;
`;
