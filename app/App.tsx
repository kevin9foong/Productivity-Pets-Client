import { registerRootComponent } from 'expo';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import rootReducer from './redux/reducers';
import AuthContainer from './authcontainer';
import Router from './router';

type Props = {};

const store = createStore(rootReducer);

const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light }}>
        <AuthContainer>
          <Router/>
        </AuthContainer>
      </ApplicationProvider>
    </Provider>
  );
};

registerRootComponent(App);
