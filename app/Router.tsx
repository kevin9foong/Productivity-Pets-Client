import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// For Zach: please replace this dummy home here! :)
import HomeScreen from './screens/main/HomePage';
import LoginScreen from './screens/auth/LoginScreen';
import { generateStackNavigatorWithScreens } from './utils/Navigator';

// Defines the screens on the root path
export type AuthStackParamList = {
  Login: undefined;
};

export type MainStackParamList = {
  Home: undefined;
};

const authScreens = {
  Login: LoginScreen
};

const mainScreens = {
  Home: HomeScreen
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const MainStack = createStackNavigator<MainStackParamList>();

type RouterProps = {
  isLoggedIn: boolean;
};

const Router: React.FC<RouterProps> = ({ isLoggedIn }: RouterProps) => {
  return (
    <NavigationContainer>
      {isLoggedIn
        ? generateStackNavigatorWithScreens(MainStack, mainScreens)
        : generateStackNavigatorWithScreens(AuthStack, authScreens)}
    </NavigationContainer>
  );
};

export default Router;
