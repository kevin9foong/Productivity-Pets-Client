import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';

import SignUp from './pages/signup';
import LoginPage from './pages/loginpage';
import HomePage from './pages/home';

type Props = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover'
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

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={styles.container}>
        <ImageBackground
          source={require('./assets/app-background.jpg')}
          style={styles.background}
        >
          {pageToDisplay()}
          <StatusBar style="auto" />
        </ImageBackground>
      </Layout>
    </ApplicationProvider>
  );
};

registerRootComponent(App);
