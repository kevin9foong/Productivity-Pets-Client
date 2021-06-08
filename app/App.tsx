// official imports -> 3rd party imports
import { registerRootComponent } from 'expo';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// our own imports ->
import rootReducer from './redux/reducers/RootReducer';

import AuthContainer from './AuthContainer';

type Props = {};

const store = createStore(rootReducer);

const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <AuthContainer />
      </ApplicationProvider>
    </Provider>
  );
};

registerRootComponent(App);
