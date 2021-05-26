import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import SignUp from "./components/SignUp.js";
import LoginPage from "./components/LoginPage.js";

export default function App() {
  const [page, togglePage] = React.useState("login");

  function pageToDisplay() {
    if (page === "signup") {
      return <SignUp handlePage={togglePage} />;
    } else {
      // TODO implement Login page
      return <LoginPage handlePage={togglePage} />;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Productivity Pets!</Text>
      {pageToDisplay()}
      <StatusBar style="auto" />
    </View>
  );
}

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
