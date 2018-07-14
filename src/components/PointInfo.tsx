import * as React from 'react';
import { Animated } from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import styled from 'styled-components/native';

export class PointInfoComponent extends React.Component<
  PointInfoComponentProps,
  PointInfoComponentState
> {
  public state: PointInfoComponentState = {
    animation: new Animated.Value(150)
  };

  public render() {
    return (
      <Animated.View
        style={{
          ...animationStyle,
          transform: [{ translateY: this.state.animation }]
        }}
      >
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
      </Animated.View>
    );
  }

  public componentDidMount() {
    this.slideIn();
  }

  public componentDidUpdate(prevProps) {
    this.props.visible ? this.slideIn() : this.slideOut();
  }

  private slideIn() {
    Animated.timing(this.state.animation, {
      duration: 200,
      toValue: 0
    }).start();
  }

  private slideOut() {
    Animated.timing(this.state.animation, {
      duration: 200,
      toValue: 150
    }).start();
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

const animationStyle = {
  backgroundColor: '#fff',
  borderRadius: 4,
  bottom: 20,
  elevation: 2,
  left: 20,
  padding: 20,
  position: 'absolute',
  right: 20
};

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
