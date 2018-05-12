import { observer, Provider } from 'mobx-react';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Login } from './Login';
import { AuthStore } from './stores';

const SignedOut = StackNavigator({
  Login: {
    navigationOptions: {
      header: null
    },
    screen: Login
  }
});

const stores = {
  authStore: new AuthStore()
};

@observer
export default class App extends React.Component<{}> {
  public render() {
    return (
      <Provider {...stores}>
        {stores.authStore.isAuthenticated ? (
          <Text>LoggedIn</Text>
        ) : (
          <SignedOut />
        )}
      </Provider>
    );
  }
}
