import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/main/homepage';
import AuthScreen from './screens/auth/authscreen';
import { generateStackNavigatorWithScreens } from './utils/Navigator';

// Defines the screens on the root path
export type AuthStackParamList = {
  Login: undefined;
};

export type MainStackParamList = {
  Home: undefined;
};

const authScreens = {
  Login: AuthScreen
};

const mainScreens = {
  Home: HomeScreen
};

const AuthStack = createStackNavigator<AuthStackParamList>();
const MainStack = createStackNavigator<MainStackParamList>();

type OwnProps = {
  userToken: string;
};

const Router: React.FC<OwnProps> = ({ userToken }: OwnProps) => {
  return (
    <NavigationContainer>
      {userToken
        ? generateStackNavigatorWithScreens(MainStack, mainScreens, false)
        : generateStackNavigatorWithScreens(AuthStack, authScreens, false)}
    </NavigationContainer>
  );
};

const mapStateToProps = (state: any) => ({
  userToken: state.auth.userToken
});

export default connect(mapStateToProps)(Router);
