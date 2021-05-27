import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";

import SignUp from "./pages/signup";
import LoginPage from "./pages/loginpage";

type Props = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
  },
});

const App: React.FC<Props> = () => {
  const [page, togglePage] = React.useState("login");

  const pageToDisplay = () => {
    if (page === "signup") {
      return <SignUp handlePage={togglePage} />;
    } else {
      return <LoginPage handlePage={togglePage} />;
    }
  };

  // TODO: organise files to consolidate login-related pages under
  // a folder within a pages directory perhaps. Start working on home pages
  // integrate Kitten UI
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Productivity Pets!</Text>
        {pageToDisplay()}
        <StatusBar style="auto" />
      </View>
    </ApplicationProvider>
  );
};

registerRootComponent(App);
