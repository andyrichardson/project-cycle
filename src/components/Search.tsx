import * as React from 'react';
import { Animated, BackHandler, Dimensions } from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import styled from 'styled-components/native';

export class SearchComponent extends React.Component<
  SearchComponentProps,
  SearchComponentState
> {
  public state: SearchComponentState = {
    leftPosition: new Animated.Value(20),
    maxHeight: new Animated.Value(58),
    rightPosition: new Animated.Value(20),
    topPosition: new Animated.Value(20)
  };

  public render() {
    return (
      <Animated.View
        style={{
          ...animationStyle,
          left: this.state.leftPosition,
          maxHeight: this.state.maxHeight,
          right: this.state.rightPosition,
          top: this.state.topPosition
        }}
      >
        <SearchInput
          onFocus={this.props.activateSearch}
          placeholder={'Find a location'}
          value={''}
          underlineColorAndroid={'rgba(0,0,0,0)'}
          ref={'searchInput'}
        />
      </Animated.View>
    );
  }

  public componentDidUpdate(prevProps) {
    this.props.search.active
      ? BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
      : BackHandler.removeEventListener(
          'hardwareBackPress',
          this.handleBackPress
        );

    if (this.props.search.active === prevProps.search.active) {
      return;
    }

    return this.props.search.active
      ? this.animateExpand()
      : this.animateCollapse();
  }

  public componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  private animateExpand() {
    const duration = 200;
    const toValue = 0;

    Animated.timing(this.state.leftPosition, { duration, toValue }).start();
    Animated.timing(this.state.rightPosition, { duration, toValue }).start();
    Animated.timing(this.state.topPosition, { duration, toValue }).start();
    Animated.timing(this.state.maxHeight, {
      duration: 600,
      toValue: Dimensions.get('window').height
    }).start();
  }

  private animateCollapse() {
    const duration = 200;
    const toValue = 20;

    Animated.timing(this.state.leftPosition, { duration, toValue }).start();
    Animated.timing(this.state.rightPosition, { duration, toValue }).start();
    Animated.timing(this.state.topPosition, { duration, toValue }).start();
    Animated.timing(this.state.maxHeight, {
      duration,
      toValue: 58
    }).start();
  }

  private handleBackPress = () => {
    this.props.deactivateSearch();
    // @ts-ignore
    this.refs.searchInput.root.blur();
    return true;
  };
}

const animationStyle = {
  backgroundColor: '#fff',
  borderRadius: 4,
  display: 'flex',
  elevation: 2,
  flexDirection: 'column',
  height: '100%',
  position: 'absolute'
};

const SearchInput = styled.TextInput`
  background: #fff;
  border-radius: 4;
  padding: 17px 20px;
  width: 100%;
`;
