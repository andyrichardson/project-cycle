import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Login } from './Login';

const Root = StackNavigator({
  Login: {
    navigationOptions: {
      header: null
    },
    screen: Login
  }
});

export default class App extends React.Component<{}> {
  public render() {
    return <Root />;
  }
}
