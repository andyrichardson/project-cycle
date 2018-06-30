import * as React from 'react';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps-super-cluster';
import PercentageCircle from 'react-native-percentage-circle';
import Permissions from 'react-native-permissions';
import styled from 'styled-components/native';
import { MarkerComponent } from './Marker';
import { PointInfoComponent } from './PointInfo';

export class MapComponent extends React.Component<
  MapComponentProps,
  MapComponentState
> {
  public state: MapComponentState = {
    activePoint: null,
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
      <ComponentView>
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

        {this.state.activePoint !== null && (
          <PointInfoComponent point={this.state.activePoint} />
        )}
      </ComponentView>
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

  private get data(): MarkerData[] {
    return this.props.points.results.map((point, index) => ({
      id: index,
      location: point.location,
      point
    }));
  }

  private renderMarker = (data: MarkerData) => {
    const percent = (data.point.bikes.available / data.point.bikes.total) * 100;
    return (
      <MarkerComponent
        key={data.id}
        point={data.point}
        onPress={this.onPointPress}
      />
    );
  };

  private renderCluster = (cluster, onPress) => {
    const { pointCount, coordinate } = cluster;

    return (
      <Marker coordinate={coordinate} onPress={onPress}>
        <ClusterView>
          <ClusterText>{pointCount}</ClusterText>
        </ClusterView>
      </Marker>
    );
  };

  private updatePosition(position: Position): void {
    this.setState({
      ...this.state,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }

  private onPointPress = (point: BikePoint) => {
    this.setState({ activePoint: point });
  };

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

const ComponentView = styled.View`
  height: 100%;
`;
