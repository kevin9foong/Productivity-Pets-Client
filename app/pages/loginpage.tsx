import React, { useState } from "react";
import { Alert, View, Text, StyleSheet } from "react-native";
import { Button, Input } from "@ui-kitten/components";

const styles = StyleSheet.create({
  textinput: {
    height: 30,
    margin: 5,
    borderBottomWidth: 1,
  },
  link: {
    color: "blue",
  },
});

type LoginPageProps = {
  handlePage: (page: string) => void;
  handleUserName: (name: string) => void;
};

const LoginPage = ({ handlePage, handleUserName }: LoginPageProps) => {
  const [username, handleUsername] = useState("");
  const [password, handlePassword] = useState("");

  // TODO: make password hidden and hook up button to backend
  // figure out some way to store credentials locally to
  // streamline the login process.
  return (
    <View>
      <Input
        style={styles.textinput}
        placeholder="Username"
        value={username}
        onChangeText={(text) => handleUsername(text)}
      />
      <Input
        style={styles.textinput}
        placeholder="Password"
        value={password}
        onChangeText={(text) => handlePassword(text)}
      />
      <Button
        onPress={() => {
          handlePage("home");
          handleUserName(username);
        }}
      >
        Login
      </Button>
      <Text>
        Do not have an account yet?{" "}
        <Text style={styles.link} onPress={() => handlePage("signup")}>
          Sign up
        </Text>
      </Text>
    </View>
  );
};

export default LoginPage;
