import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import AuthContext from './contexts/AuthContext';
import { login, logout, retrieveToken } from './redux/actions/AuthActions';
import { IAction } from './redux/actions/ActionType';
import { save, getValueFor } from './utils/SecureStore';
import { authenticateGoogleAccessToken } from './api/Auth';

import SplashScreen from './screens/general/SplashScreen';
import Router from './Router';

WebBrowser.maybeCompleteAuthSession();

type OwnProps = {
}

type DispatchProps = {
  login: (userId: string, userToken: string) => IAction,
  logout: () => IAction,
  retrieveToken: (userToken: string | null) => IAction
};

const AuthContainer = (props: OwnProps & DispatchProps) => {
  const [request, res, promptAsync] = Google.useAuthRequest({
    expoClientId:
      '455617521342-vs3pab8tkpp2stpsc71ruuq2nqteer98.apps.googleusercontent.com',
    webClientId:
      '455617521342-htliucvfap8nuqqoid8l31k463luh0ii.apps.googleusercontent.com'
  });

  const authContext = useMemo(
    () => ({
      login: () => {
        promptAsync();
      },
      logout: () => {
        props.logout();
      }
    }),
    [promptAsync]
  );

  // check if userToken exists in secure store
  useEffect(() => {
    getValueFor('userToken')
      .then((userToken) => {
        props.retrieveToken(userToken);
      })
      .catch((err) => console.error(err));
  }, []);

  // once accessToken is valid, retreives token for use with server
  useEffect(() => {
    if (res?.type === 'success') {
      // auth data including access token
      const { authentication } = res;
      if (authentication?.accessToken) {
        authenticateGoogleAccessToken(authentication.accessToken)
          .then((jwt) => {
            if (jwt.data) {
              save('userToken', jwt.data).then(() =>
                props.login('PLACEHOLDER ID', jwt.data)
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
    {!request
      ? (
          // TODO: fix splash screen with expo splash screen
          <SplashScreen />
        )
      : (
          <AuthContext.Provider value={authContext}>
            <Router />
          </AuthContext.Provider>
        )}
    </>
  );
};

export default connect(null,
  {
    login: login,
    logout: logout,
    retrieveToken: retrieveToken
  })(AuthContainer);
