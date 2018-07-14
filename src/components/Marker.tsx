import * as React from 'react';
import { Marker } from 'react-native-maps';
import PercentageCircle from 'react-native-percentage-circle';
import styled from 'styled-components/native';

export class MarkerComponent extends React.PureComponent<MarkerComponentProps> {
  public render() {
    return (
      <Marker coordinate={this.props.point.location} onPress={this.onPress}>
        <MarkerView>
          <MarkerImage source={require('../assets/images/marker.png')} />
          <PercentageView>
            <PercentageCircle
              borderWidth={3}
              radius={15.5}
              percent={this.percentage}
              innerColor={'#333'}
              bgcolor={'#333'}
              color={'#f00'}
            >
              <MarkerText>{this.props.point.bikes.available}</MarkerText>
            </PercentageCircle>
          </PercentageView>
        </MarkerView>
      </Marker>
    );
  }

  private get percentage() {
    return (
      (this.props.point.bikes.available / this.props.point.bikes.total) * 100
    );
  }

  private onPress = () => {
    return this.props.onPress(this.props.point);
  };
}

const MarkerView = styled.View``;

const MarkerImage = styled.Image`
  width: 70px;
  height: 70px;
`;

const MarkerText = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
`;

const PercentageView = styled.View`
  position: absolute;
  left: 19.5px;
  top: 10.5px;
`;
