// official imports -> 3rd party imports
import { registerRootComponent } from 'expo';
import React, { useEffect, useMemo, useReducer } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

// our own imports ->
import { save, getValueFor } from './utils/SecureStore';
import { authenticateGoogleAccessToken } from './api/Auth';

import Router from './Router';
import SplashScreen from './screens/misc/SplashScreen';
import AuthContext from './context/AuthContext';

type Props = {};

WebBrowser.maybeCompleteAuthSession();

const App: React.FC<Props> = () => {
  const [request, res, promptAsync] = Google.useAuthRequest({
    // TODO: migrate this to env
    expoClientId:
      '455617521342-vs3pab8tkpp2stpsc71ruuq2nqteer98.apps.googleusercontent.com',
    webClientId:
      '455617521342-htliucvfap8nuqqoid8l31k463luh0ii.apps.googleusercontent.com'
  });

  const initialAuthState = {
    isLoading: true,
    // userName: null,
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
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          isLoading: false
        };
    }
  };

  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  const authContext = useMemo(
    () => ({
      signIn: () => {
        promptAsync();
      },
      signOut: () => {
        dispatch({ type: 'LOGOUT' });
      }
    }),
    [promptAsync]
  );

  useEffect(() => {
    getValueFor('userToken')
      .then((userToken) => {
        dispatch({ type: 'RETRIEVE_TOKEN', userToken: userToken });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (res?.type === 'success') {
      // auth data including access token
      const { authentication } = res;
      if (authentication?.accessToken) {
        authenticateGoogleAccessToken(authentication.accessToken)
          .then((jwt) => {
            if (jwt.data) {
              save('userToken', jwt.data).then(() =>
                dispatch({ type: 'LOGIN', id: 'PLACEHOLDER', token: jwt })
              );
            } else {
              console.error('No valid JWT retrieved.');
            }
          })
          .catch((err) => console.error(err));
      }
    }
  }, [res, request]);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {!request
          ? (
          // TODO: fix splash screen with expo splash screen
          <SplashScreen />
            )
          : (
          <AuthContext.Provider value={authContext}>
            <Router isLoggedIn={authState.userToken} />
          </AuthContext.Provider>
            )}
      </ApplicationProvider>
    </>
  );
};

registerRootComponent(App);
