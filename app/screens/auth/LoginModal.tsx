import React from 'react';
// import { connect } from 'react-redux';
import { Layout, Button, Input } from '@ui-kitten/components';

import LoginStyles from '../../styles/Login.Styles';
import AuthContext from '../../contexts/AuthContext';
import { Modal, View } from 'react-native';

enum LoginTypes {
  register = 'REGISTER',
  login = 'LOGIN',
}

type LoginModalProps = {
  type: LoginTypes;
  handleEvent: any; // should be Function once login and register implemented
  visible: boolean;
  setVisible: Function;
};

const LoginScreen = (props: LoginModalProps) => {
  const { login } = React.useContext(AuthContext);

  return (
    <Modal animationType="slide" visible={props.visible} transparent={true}>
      <Layout style={LoginStyles.bottom}>
        <View style={LoginStyles.buttonGroup}>
          <Input
            style={LoginStyles.input}
            status="primary"
            placeholder="USERNAME"
          />
          <Input
            style={LoginStyles.input}
            status="primary"
            placeholder="PASSWORD"
          />
        </View>
        <Button style={{ width: '90%' }}>{props.type}</Button>
        <Button style={LoginStyles.bottomButton} onPress={login}>
          SIGN IN WITH GOOGLE
        </Button>
      </Layout>
    </Modal>
  );
};

export default LoginScreen;
