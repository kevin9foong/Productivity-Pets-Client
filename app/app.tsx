import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from "@ui-kitten/components";

import SignUp from "./pages/signup";
import LoginPage from "./pages/loginpage";
import HomePage from "./pages/home";

type Props = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
});

function addTodo(newTitle: String, newDesc: String, newDate: String) {
  dummyTodos.unshift({ title: newTitle, desc: newDesc, date: newDate });
}

const App: React.FC<Props> = () => {
  const [page, togglePage] = React.useState("login");
  const [username, handleUserName] = React.useState("");
  const [todos, handleTodo] = React.useState([
    {
      id: 0,
      title: "go to the gym",
      desc: "",
    },
    {
      id: 1,
      title: "finish CS2040S problem set",
      desc: "",
    },
    {
      id: 2,
      title: "buy birthday present for Mom",
      desc: "",
    },
  ]);

  const pageToDisplay = () => {
    if (page === "signup") {
      return <SignUp handlePage={togglePage} handleUserName={handleUserName} />;
    } else if (page === "login") {
      return (
        <LoginPage handlePage={togglePage} handleUserName={handleUserName} />
      );
    } else if (page === "home") {
      return <HomePage name={username} todos={todos} handleTodo={handleTodo} />;
    }
  };

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <IconRegistry icons={EvaIconsPack} />
      <Layout style={styles.container}>
        <ImageBackground
          source={require("./assets/app-background.jpg")}
          style={styles.background}
        >
          {pageToDisplay()}
          <StatusBar style="auto" />
        </ImageBackground>
      </Layout>
    </ApplicationProvider>
  );
};

registerRootComponent(App);
