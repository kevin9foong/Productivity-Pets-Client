import React, { useState } from 'react';
import {
  View
} from 'react-native';
// import * as WebBrowser from 'expo-web-browser';
import { StackNavigationProp } from '@react-navigation/stack';

// import { googleAuthUrl } from '../../config/loginconfig';
import googleLoginStyles from '../../styles/googlelogin.styles';
import IconButton from '../../components/iconbutton';
import LoginAvatar from '../../components/loginavatar';
import { IUser } from '../../types/UserTypes';
import { RootStackParamList } from '../../rootstackparams';

type LoginNavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

type LoginProps = {
  navigation: LoginNavigationProps
}

const Login: React.FC<LoginProps> = ({ navigation }: LoginProps) => {
  const [user] = useState<IUser | undefined>(undefined);

  const handleGoogleLogin = () => navigation.navigate('Home');
  // const handleGoogleLogin = () => {
  //   return WebBrowser.openBrowserAsync(googleAuthUrl);
  // };

  return (
    <View style={googleLoginStyles.container}>
        <LoginAvatar
            greetingMessage={user ? `Welcome ${user.name}` : 'Welcome Stranger!'}
            avatarImgSource={user?.avatarUri}
            actionMessage={user ? undefined : 'Please log in to continue.'}
             />
        <IconButton
            iconName='google'
            buttonText='Login with Google'
            handleButtonPress={handleGoogleLogin}
            />
    </View>
  );
};

export default Login;
