import { Provider } from 'mobx-react';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Login } from './Login';
import { AuthStore } from './stores';

const Root = StackNavigator({
  Login: {
    navigationOptions: {
      header: null
    },
    screen: Login
  }
});

const stores = {
  AuthStore: new AuthStore()
};

export default class App extends React.Component<{}> {
  public render() {
    return (
      <Provider {...stores}>
        <Root />
      </Provider>
    );
  }
}
