import { registerRootComponent } from 'expo';
import React from 'react';
import Login from './pages/login';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return <Login />;
};

registerRootComponent(App);
