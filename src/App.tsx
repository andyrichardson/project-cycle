import { observer, Provider } from 'mobx-react';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Login } from './Login';
import { Map } from './Map';
import { AuthStore, PointStore } from './stores';

const SignedOut = StackNavigator({
  Login: {
    navigationOptions: {
      header: null
    },
    screen: Login
  }
});

const stores = {
  authStore: new AuthStore(),
  pointStore: new PointStore()
};

@observer
export default class App extends React.Component<{}> {
  public render() {
    return (
      <Provider {...stores}>
        {/* {stores.authStore.isAuthenticated ? (
          <Text>LoggedIn</Text>
        ) : (
          <SignedOut />
        )} */}
        <Map />
      </Provider>
    );
  }

  public componentDidMount() {
    stores.pointStore.fetchAll();
  }
}
