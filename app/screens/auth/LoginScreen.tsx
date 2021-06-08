import React, { useState } from 'react';
import { Layout } from '@ui-kitten/components';

import LoginStyles from '../../styles/Login.Styles';
import IconButton from '../../components/login/IconButton';
import LoginAvatar from '../../components/login/LoginAvatar';
import { IUser } from '../../types/UserTypes';
import AuthContext from '../../contexts/AuthContext';

type LoginScreenProps = {};

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const { login } = React.useContext(AuthContext);

  const [user] = useState<IUser | undefined>(undefined);

  return (
    <Layout style={LoginStyles.container}>
      <LoginAvatar
        greetingMessage={user ? `Welcome ${user.name}` : 'Welcome Stranger!'}
        avatarImgSource={user?.avatarUri}
        actionMessage={user ? undefined : 'Please log in to continue.'}
      />
      <IconButton
        iconName="google"
        buttonText="Login with Google"
        handleButtonPress={login}
      />
    </Layout>
  );
};

export default LoginScreen;
