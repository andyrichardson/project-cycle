import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
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

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component<{}> {
  public render() {
    return (
      <Provider store={store}>
        <Map />
      </Provider>
    );
  }
}
