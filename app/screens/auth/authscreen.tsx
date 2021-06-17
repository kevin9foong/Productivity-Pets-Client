import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Layout, useStyleSheet } from '@ui-kitten/components';

import AuthScreenStyles from '../../styles/screens/auth/authscreen.styles';
import { Image } from 'react-native';
import AuthModal from '../../components/auth/authmodal';

export type authType = 'login' | 'register' | undefined;

type StateProps = {
  userName?: string;
  userAvatar?: string;
  userId?: string;
  navigation: any;
};

const LoginScreen: React.FC<StateProps> = (props: StateProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [authType, setAuthType] = useState<authType>(undefined);

  const ThemedAuthScreenStyles = useStyleSheet(AuthScreenStyles);

  const showModal = (authType: authType): void => {
    setAuthType(authType);
    setIsVisible(true);
  };

  return (
    <Layout style={ThemedAuthScreenStyles.container}>
      <Layout style={ThemedAuthScreenStyles.logoContainer}>
        <Image
          style={AuthScreenStyles.logo}
          source={require('../../assets/logo.png')}
        />
      </Layout>
      <Layout style={ThemedAuthScreenStyles.buttonContainer}>
        <Button
          onPress={() => showModal('register')}
          style={ThemedAuthScreenStyles.actionButton}
        >
          Register
        </Button>
        <Button
          onPress={() => showModal('login')}
          style={ThemedAuthScreenStyles.actionButton}
        >
          Login
        </Button>
      </Layout>
      <AuthModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        handleSubmitAuthDetails={() => {}}
        onRequestClose={() => setIsVisible(false)}
        authType={authType}
      />
    </Layout>
  );
};

const mapStateToProps = ({ auth }: any) => ({
  userName: auth.userName,
  userAvatar: auth.userAvatar,
  userId: auth.userId
});

export default connect(mapStateToProps)(LoginScreen);
