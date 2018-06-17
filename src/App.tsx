import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Map } from './containers';
import { rootReducer } from './reducers';

// import { Login } from './Login';

// const SignedOut = StackNavigator({
//   Login: {
//     navigationOptions: {
//       header: null
//     },
//     screen: Login
//   }
// });

const store = createStore(rootReducer);

export default class App extends React.Component<{}> {
  public render() {
    return (
      <Provider store={store}>
        <Map />
      </Provider>
    );
  }
}
