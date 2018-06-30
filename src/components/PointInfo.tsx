import * as React from 'react';
import PercentageCircle from 'react-native-percentage-circle';
import styled from 'styled-components/native';

export class PointInfoComponent extends React.Component<
  PointInfoComponentProps
> {
  public render() {
    return (
      <PointInfoView>
        {this.percentage()}
        <PointTitle>{this.props.point.name}</PointTitle>
      </PointInfoView>
    );
  }

  private percentage() {
    return (
      <PercentageCircle
        borderWidth={3}
        radius={15.5}
        percent={20}
        innerColor={'#333'}
        bgcolor={'#333'}
        color={'#f00'}
      />
    );
  }
}

const PointInfoView = styled.View`
  background: #fff;
  bottom: 20px;
  height: 200px;
  left: 20px;
  position: absolute;
  right: 20px;
`;

const PointTitle = styled.Text``;
