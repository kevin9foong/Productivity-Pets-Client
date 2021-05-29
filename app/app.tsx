// official imports -> 3rd party imports
import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

// our own imports ->
import { RootStackParamList } from './rootstackparams';

// For Zach: please replace this dummy home here! :)
import DummyHome from './screens/main/dummyhome';
import GoogleLogin from './screens/auth/login';

type Props = {};

const App: React.FC<Props> = () => {
  // the 'Root' stack is the main stack of our program
  const RootStack = createStackNavigator<RootStackParamList>();

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName='Login'>
          <RootStack.Screen name="Home" component={DummyHome} />
          <RootStack.Screen name="Login" component={GoogleLogin} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

registerRootComponent(App);
