import { observer, Provider } from 'mobx-react';
import * as React from 'react';
import { Text } from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

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
      />
    );
  }
}

const PageView = styled.View``;

// const MapView = styled.MapView``;
