import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import styled from 'styled-components/native';

type Props = any;
interface State {
  email: string;
  password: string;
}
export class Login extends React.Component<Props, State> {
  public state: State = {
    email: '',
    password: ''
  };

  public render() {
    return (
      <PageView>
        <LoginInput
          placeholder="Email address"
          onChangeText={text => this.setState({ email: text })}
        />
        <LoginInput
          placeholder="Password"
          onChangeText={text => this.setState({ email: text })}
        />

        <LoginButton>
          <ButtonText>Login</ButtonText>
        </LoginButton>
      </PageView>
    );
  }

  private submit() {
    return true;
  }
}

const PageView = styled.View`
  background: #f00;
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

const LoginInput = styled.TextInput`
  height: 50px;
  margin: 10px 0;
  width: 100%;
`;

const LoginButton = styled.TouchableNativeFeedback`
  align-items: center;
  background-color: #c00;
  border-radius: 2000px;
  padding: 15px;
`;

const ButtonText = styled.Text`
  color: #fff;
`;
