import { inject, observer } from 'mobx-react';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import styled from 'styled-components/native';
import { AuthStore } from './stores';

interface Props {
  authStore: AuthStore;
}

@inject('authStore')
@observer
export class Login extends React.Component<Props, any> {
  public render() {
    return (
      <PageView>
        <LoginInput
          placeholder="Email address"
          onChangeText={text => this.props.authStore.setEmail(text)}
        />
        <LoginInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => this.props.authStore.setPassword(text)}
        />

        <LoginButton onPress={() => this.props.authStore.login()}>
          <ButtonText>Login</ButtonText>
        </LoginButton>
      </PageView>
    );
  }
}

const PageView = styled.View`
  background: #f00;
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

const LoginInput = styled.TextInput`
  color: #fff;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
`;

const LoginButton = styled.TouchableHighlight`
  align-items: center;
  background-color: #c00;
  padding: 15px;
  width: 100%;
`;

const ButtonText = styled.Text`
  color: #fff;
`;
