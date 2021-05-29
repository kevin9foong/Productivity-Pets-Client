import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from './rootstackparams';

// For Zach: please replace this dummy home here! :)
import DummyHome from './screens/main/dummyhome';
import GoogleLogin from './screens/auth/login';

type Props = {};

const App: React.FC<Props> = () => {
  // the 'Root' stack is the main stack of our program
  const RootStack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Login'>
        <RootStack.Screen name="Home" component={DummyHome} />
        <RootStack.Screen name="Login" component={GoogleLogin} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(App);
