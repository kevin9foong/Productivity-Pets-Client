import React, { useState } from 'react';
import {
  View
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import { googleAuthUrl } from '../config/loginconfig';
import googleLoginStyles from '../styles/googlelogin.styles';
import IconButton from '../components/common/iconbutton';
import LoginAvatar from '../components/login/loginavatar';
import { IUser } from '../types/UserTypes';

type GoogleLoginProps = {}

const GoogleLogin: React.FC<GoogleLoginProps> = () => {
  const [user] = useState<IUser | undefined>(undefined);

  const handleGoogleLogin = () => {
    return WebBrowser.openBrowserAsync(googleAuthUrl);
  };

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

export default GoogleLogin;
