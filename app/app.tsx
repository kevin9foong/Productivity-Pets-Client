import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
// Layout is usually used in the root component but i havent figured out how to use it yet
import { ApplicationProvider, Text, Card } from '@ui-kitten/components';

import SignUp from './pages/signup';
import LoginPage from './pages/loginpage';
import HomePage from './pages/home';

type Props = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18
  }
});

const App: React.FC<Props> = () => {
  const [page, togglePage] = React.useState('login');
  const [username, handleUserName] = React.useState('');

  const pageToDisplay = () => {
    if (page === 'signup') {
      return <SignUp handlePage={togglePage} handleUserName={handleUserName} />;
    } else if (page === 'login') {
      return (
        <LoginPage handlePage={togglePage} handleUserName={handleUserName} />
      );
    } else if (page === 'home') {
      return <HomePage name={username} />;
    }
  };

  // TODO: organise files to consolidate login-related pages under
  // a folder within a pages directory perhaps. Start working on home pages
  // integrate Kitten UI
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <Card>
          <Text category="h1">Productivity Pets!</Text>
          {pageToDisplay()}
          <StatusBar style="auto" />
        </Card>
      </View>
    </ApplicationProvider>
  );
};

registerRootComponent(App);
