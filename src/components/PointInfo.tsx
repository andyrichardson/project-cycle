import * as React from 'react';
import PercentageCircle from 'react-native-percentage-circle';
import styled from 'styled-components/native';

export class PointInfoComponent extends React.Component<
  PointInfoComponentProps
> {
  public render() {
    return (
      <PointInfoView>
        <TopRowView>
          {this.percentage()}
          <InfoView>
            <Title>{this.props.point.name}</Title>
            <SubtextView>
              <Subtext>{this.bikes.available} Bikes</Subtext>
              <Subtext>{this.bikes.spaces} Spaces</Subtext>
            </SubtextView>
          </InfoView>
        </TopRowView>
      </PointInfoView>
    );
  }

  private percentage() {
    return (
      <PercentageCircle
        borderWidth={3}
        radius={20}
        percent={20}
        innerColor={'#fff'}
        bgcolor={'#eee'}
        color={'#f00'}
      >
        <PercentageText>{this.props.point.bikes.available}</PercentageText>
      </PercentageCircle>
    );
  }

  private get bikes() {
    return {
      available: this.props.point.bikes.available,
      spaces: this.props.point.bikes.total - this.props.point.bikes.available
    };
  }
}

const PointInfoView = styled.View`
  background: #fff;
  border-radius: 4px;
  bottom: 20px;
  left: 20px;
  padding: 20px;
  position: absolute;
  right: 20px;
  elevation: 2;
`;

const TopRowView = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const InfoView = styled.View`
  margin-left: 15px;
`;

const SubtextView = styled.View`
  display: flex;
  flex-direction: row;
`;

const Subtext = styled.Text`
  margin-right: 10px;
`;

const Title = styled.Text`
  color: #444;
  font-size: 18px;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

const PercentageText = styled.Text`
  text-align: center;
`;
