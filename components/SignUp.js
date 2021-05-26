import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state.username = "";
    this.state.password = "";
    this.state.confirmPwd = "";
    this.state.disabled = true;
  }

  state = {
    username: String,
    password: String,
    confirmPwd: String,
    disabled: Boolean,
  };

  handleUsername = (text) => {
    this.setState({ username: text }, () => this.toggleDisable());
  };

  handlePassword = (text) => {
    this.setState({ password: text }, () => this.toggleDisable());
  };

  checkPassword = (text) => {
    this.setState({ confirmPwd: text }, () => this.toggleDisable());
  };

  toggleDisable = () => {
    if (
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.confirmPwd !== this.state.password
    ) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  };

  render = () => {
    return (
      <View>
        <TextInput
          style={styles.textinput}
          placeholder="Username"
          onChangeText={this.handleUsername}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          onChangeText={this.handlePassword}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Confirm Password"
          onChangeText={this.checkPassword}
        />
        <Button
          title="Sign Up"
          disabled={this.state.disabled}
          onPress={() => alert("signed up")}
        />
        <br />
        <Text>
          Already have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => this.props.handlePage("login")}
          >
            Log in
          </Text>
        </Text>
      </View>
    );
  };
}

export default SignUp;

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
