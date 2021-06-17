import React, { useContext } from 'react';
import { Layout, Button, Input, useStyleSheet } from '@ui-kitten/components';
import { Modal } from 'react-native';

import { authType } from '../../screens/auth/authscreen';
import authStyles from '../../styles/components/auth/authmodal.styles';
import AuthContext from '../../contexts/authcontext';
import IconButton from '../commons/IconButton';

type StateProps = {
  handleSubmitAuthDetails: any;
  isVisible: boolean;
  setIsVisible: Function;
  authType: authType;
  onRequestClose: () => void;
};

const AuthModal = (props: StateProps) => {
  const themedAuthModalStyles = useStyleSheet(authStyles);
  const { login } = useContext(AuthContext);

  return (
    <Modal
      animationType="slide"
      visible={props.isVisible}
      transparent={true}
      onRequestClose={props.onRequestClose}
      >
      <Layout style={themedAuthModalStyles.container}>
        <Layout style={themedAuthModalStyles.userPasswordContainer}>
          <Input
            style={themedAuthModalStyles.input}
            status="primary"
            placeholder="USERNAME"
          />
          <Input
            style={themedAuthModalStyles.input}
            status="primary"
            placeholder="PASSWORD"
          />
          <Button style={themedAuthModalStyles.button}>{props.authType === 'login' ? 'Login' : 'Register'}</Button>
          </Layout>
          <Layout style={themedAuthModalStyles.oAuthContainer} >
            <IconButton
              iconName={'google'}
              buttonText={props.authType === 'login' ? 'Log in with Google' : 'Sign up with Google'}
              handleButtonPress={login}/>
          </Layout>
      </Layout>
    </Modal>
  );
};

export default AuthModal;
