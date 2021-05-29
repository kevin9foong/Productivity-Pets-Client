import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input, Text, Card, Icon } from "@ui-kitten/components";

const styles = StyleSheet.create({
  text: {
    margin: 2,
  },
  title: {
    margin: 5,
  },
  card: {
    width: "90%",
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
      <Card style={styles.card}>
        <Text style={styles.title} category="h1">
          Productivity Pets!
        </Text>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={(text) => handleUsername(text)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={(text) => handlePassword(text)}
        />
        <Button
          appearance="outline"
          onPress={() => {
            handlePage("home");
            handleUserName(username);
          }}
        >
          Login
        </Button>
        <Text style={styles.text} appearance="hint" category="c1">
          Do not have an account yet?{" "}
          <Text status="primary" onPress={() => handlePage("signup")}>
            Sign up
          </Text>
        </Text>
      </Card>
    </View>
  );
};

export default LoginPage;
