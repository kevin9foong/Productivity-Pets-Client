import { registerRootComponent } from 'expo';
import React from 'react';

import GoogleLogin from './pages/googlelogin';

type Props = {};

const App: React.FC<Props> = () => {
  return (
      <GoogleLogin />
  );
};

registerRootComponent(App);
