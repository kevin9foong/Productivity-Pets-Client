import React, { useContext } from 'react';
import { Layout, Button, Input } from '@ui-kitten/components';
import { Modal } from 'react-native';

import { authType } from '../../screens/auth/authscreen';
import authStyles from '../../styles/components/auth/authmodal.styles';
import AuthContext from '../../contexts/authcontext';
import IconButton from '../user/IconButton';

type StateProps = {
  handleSubmitAuthDetails: any;
  isVisible: boolean;
  setIsVisible: Function;
  authType: authType;
};

const AuthModal = (props: StateProps) => {
  const { login } = useContext(AuthContext);

  return (
    <Modal
      animationType="slide"
      visible={props.isVisible}
      transparent={false}>
      <Layout style={authStyles.bottom}>
        <Layout style={authStyles.buttonGroup}>
          <Input
            style={authStyles.input}
            status="primary"
            placeholder="USERNAME"
          />
          <Input
            style={authStyles.input}
            status="primary"
            placeholder="PASSWORD"
          />
        </Layout>
        <Button style={{ width: '90%' }}>{props.authType === 'login' ? 'Login' : 'Register'}</Button>
        <IconButton
          iconName={'google'}
          buttonText={props.authType === 'login' ? 'Log in with Google' : 'Sign up with Google'}
          handleButtonPress={login}/>
      </Layout>
    </Modal>
  );
};

export default AuthModal;
