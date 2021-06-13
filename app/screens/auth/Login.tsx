import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@ui-kitten/components';

import LoginStyles from '../../styles/Login.Styles';
import { Image, View } from 'react-native';
import LoginModal from './LoginModal';

type OwnProps = {
  userName?: string;
  userAvatar?: string;
  userId?: string;
  navigation: any;
};

enum LoginTypes {
  register = 'REGISTER',
  login = 'LOGIN',
}

const LoginScreen: React.FC<OwnProps> = (props: OwnProps) => {
  const [visible, setVisible] = React.useState(false);
  const [loginType, setLoginType] = React.useState(LoginTypes.login);

  const showModal = (type: LoginTypes): void => {
    setLoginType(type);
    setVisible(true);
  };

  return (
    <View style={LoginStyles.container}>
      <Image
        style={LoginStyles.image}
        source={require('../../assets/logo.png')}
      />
      <View style={LoginStyles.buttonGroup}>
        <Button
          onPress={() => showModal(LoginTypes.register)}
          style={LoginStyles.button}
        >
          Register
        </Button>
        <Button
          onPress={() => showModal(LoginTypes.login)}
          style={LoginStyles.button}
        >
          Login
        </Button>
      </View>
      <LoginModal
        visible={visible}
        handleEvent={null}
        type={loginType}
        setVisible={setVisible}
      />
    </View>
  );
};

const mapStateToProps = ({ auth }: any) => ({
  userName: auth.userName,
  userAvatar: auth.userAvatar,
  userId: auth.userId
});

export default connect(mapStateToProps)(LoginScreen);
