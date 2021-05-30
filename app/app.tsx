// official imports -> 3rd party imports
import { registerRootComponent } from 'expo';
import React, { useEffect, useMemo, useReducer } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// our own imports ->
import { save, getValueFor } from './utils/SecureStore';

import Router from './Router';
import SplashScreen from './screens/misc/SplashScreen';
import AuthContext from './context/AuthContext';

type Props = {};

const App: React.FC<Props> = () => {
  const initialAuthState = {
    isLoading: false,
    userName: null,
    userToken: null
  };

  const authReducer = (prevState: any, action: any) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          userName: null,
          isLoading: false
        };
    }
  };

  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  const authContext = useMemo(() => ({
    signIn: async () => {
      await save('userToken', 'sdada');
      dispatch({ type: 'LOGIN', id: 'Kevin', token: 'sdada' });
    },
    signOut: () => {
      dispatch({ type: 'LOGOUT' });
    }
  }), []);

  useEffect(() => {
    getValueFor('userToken').then(
      tokenVal => {
        dispatch({ type: 'RETRIEVE_TOKEN', token: tokenVal });
      }
    );
  }, []);

  return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          {authState.isLoading
          // TODO: fix splash screen with expo splash screen
            ? <SplashScreen />
            : <AuthContext.Provider value={authContext}>
                <Router isLoggedIn={authState.userToken}/>
            </AuthContext.Provider>}
        </ApplicationProvider>
      </>
  );
};

registerRootComponent(App);
