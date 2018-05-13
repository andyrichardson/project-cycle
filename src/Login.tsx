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
        <Logo source={require('./assets/images/logo-white.png')} />
        <BrandText>Cycle Mate</BrandText>
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

        <RegisterButton onPress={() => this.props.authStore.login()}>
          <ButtonText>Register</ButtonText>
        </RegisterButton>
      </PageView>
    );
  }
}

const PageView = styled.View`
  align-items: center;
  background: #f00;
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

const Logo = styled.Image`
  height: 100px;
  width: 100px;
`;

const BrandText = styled.Text`
  color: #fff;
  font-size: 25px;
  font-family: 'Lato';
  margin-bottom: 50px;
  margin-top: 20px;
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
  margin-top: 30px;
  padding: 15px;
  width: 100%;
`;

const RegisterButton = styled.TouchableHighlight`
  align-items: center;
  margin-top: 5px;
  padding: 15px;
  width: 100%;
`;

const ButtonText = styled.Text`
  color: #fff;
`;
