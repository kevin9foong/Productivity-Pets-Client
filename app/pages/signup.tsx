import React from 'react';
import { Alert, View, Text, TextInput, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  textinput: {
    height: 30,
    margin: 5,
    borderBottomWidth: 1
  },
  link: {
    color: 'blue'
  }
});

type SignUpProps = {
  handlePage: (page: string) => void;
};

type SignUpState = {
  username: string;
  password: string;
  confirmPassword: string;
  disabled: boolean;
};

class SignUp extends React.Component<SignUpProps, SignUpState> {
  constructor (props: SignUpProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      disabled: true
    };
  }

  handleUsername = (text: string) => {
    this.setState({ username: text }, () => this.toggleDisable());
  };

  handlePassword = (text: string) => {
    this.setState({ password: text }, () => this.toggleDisable());
  };

  checkPassword = (text: string) => {
    this.setState({ confirmPassword: text }, () => this.toggleDisable());
  };

  toggleDisable = () => {
    if (
      this.state.username === '' ||
      this.state.password === '' ||
      this.state.confirmPassword !== this.state.password
    ) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  };

  // TODO: make passwords and confirm password fields hidden eg. ***
  // also hook up button to backend to create new user in the backend
  // and store credentials somewhere locally so no need to log in everytime.
  render = () => {
    return (
      <View>
        <TextInput
          style={styles.textinput}
          placeholder='Username'
          onChangeText={this.handleUsername}
        />
        <TextInput
          style={styles.textinput}
          placeholder='Password'
          onChangeText={this.handlePassword}
        />
        <TextInput
          style={styles.textinput}
          placeholder='Confirm Password'
          onChangeText={this.checkPassword}
        />
        <Button
          title='Sign Up'
          disabled={this.state.disabled}
          onPress={() => Alert.alert('signed up')}
        />
        <Text>
          Already have an account?{' '}
          <Text
            style={styles.link}
            onPress={() => this.props.handlePage('login')}
          >
            Log in
          </Text>
        </Text>
      </View>
    );
  };
}

export default SignUp;
