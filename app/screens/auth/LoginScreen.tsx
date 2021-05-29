import React, { useState } from 'react';
import { Layout } from '@ui-kitten/components';
// import * as WebBrowser from 'expo-web-browser';
import { StackNavigationProp } from '@react-navigation/stack';

// import { googleAuthUrl } from '../../config/loginconfig';
import googleLoginStyles from '../../styles/Login.Styles';
import IconButton from '../../components/IconButton';
import LoginAvatar from '../../components/LoginAvatar';
import { IUser } from '../../types/UserTypes';
import { RootStackParamList } from '../../RootStackParams';
import AuthContext from '../../context/AuthContext';

type LoginNavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

type LoginScreenProps = {
  navigation: LoginNavigationProps
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }: LoginScreenProps) => {
  const { signIn } = React.useContext(AuthContext);

  const [user] = useState<IUser | undefined>(undefined);

  // const handleGoogleLogin = () => navigation.navigate('Home');
  // const handleGoogleLogin = () => {
  //   return WebBrowser.openBrowserAsync(googleAuthUrl);
  // };

  return (
    <Layout style={googleLoginStyles.container}>
        <LoginAvatar
            greetingMessage={user ? `Welcome ${user.name}` : 'Welcome Stranger!'}
            avatarImgSource={user?.avatarUri}
            actionMessage={user ? undefined : 'Please log in to continue.'}
             />
        <IconButton
            iconName='google'
            buttonText='Login with Google'
            handleButtonPress={signIn}
            />
    </Layout>
  );
};

export default LoginScreen;
