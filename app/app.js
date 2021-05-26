import { registerRootComponent } from 'expo';
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

import SignUp from "./pages/signup.js";
import LoginPage from "./pages/loginpage.js";

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

function App() {
  const [page, togglePage] = React.useState("login");

  function pageToDisplay() {
    if (page === "signup") {
      return <SignUp handlePage={togglePage} />;
    } else {
      return <LoginPage handlePage={togglePage} />;
    }
  }

  // TODO: organise files to consolidate login-related pages under
  // a folder within a pages directory perhaps. Start working on home pages
  // integrate Kitten UI
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Productivity Pets!</Text>
      {pageToDisplay()}
      <StatusBar style="auto" />
    </View>
  );
}

registerRootComponent(App);