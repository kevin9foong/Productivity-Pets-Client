// official imports -> 3rd party imports
import { registerRootComponent } from "expo";
import React, { useEffect, useMemo, useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

// our own imports ->
import { RootStackParamList } from "./RootStackParams";
// import { save, getValueFor } from './utils/SecureStore';

// For Zach: please replace this dummy home here! :)
import HomeScreen from "./screens/main/home";
import LoginScreen from "./screens/auth/LoginScreen";
import SplashScreen from "./screens/misc/SplashScreen";
import AuthContext from "./context/AuthContext";

type Props = {};

const App: React.FC<Props> = () => {
  // the 'Root' stack is the main stack of our program
  const RootStack = createStackNavigator<RootStackParamList>();

  // check if user is logged in
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // used to auth user
  // const [userToken, setUserToken] = useState<string | null>(null);

  const initialAuthState = {
    isLoading: false,
    userName: null,
    userToken: null,
  };

  const authReducer = (prevState: any, action: any) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userToken: null,
          userName: null,
          isLoading: false,
        };
    }
  };

  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  const authContext = useMemo(
    () => ({
      signIn: async () => {
        // await save('userToken', 'sdada');
        dispatch({ type: "LOGIN", id: "Kevin", token: "sdada" });
      },
      signOut: () => {
        dispatch({ type: "LOGIN", id: null, token: null });
      },
    }),
    []
  );

  useEffect(() => {
    // getValueFor('userToken').then(
    //   tokenVal => {
    //     dispatch({ type: 'RETRIEVE_TOKEN', token: tokenVal });
    //   }
    // );
  }, []);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {authState.isLoading ? (
          <SplashScreen />
        ) : (
          <AuthContext.Provider value={authContext}>
            <NavigationContainer>
              <RootStack.Navigator>
                {authState.userToken ? (
                  <RootStack.Screen name="Home" component={HomeScreen} />
                ) : (
                  <RootStack.Screen name="Login" component={LoginScreen} />
                )}
              </RootStack.Navigator>
            </NavigationContainer>
          </AuthContext.Provider>
        )}
      </ApplicationProvider>
    </>
  );
};

registerRootComponent(App);
