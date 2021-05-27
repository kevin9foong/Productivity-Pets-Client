import React, { useEffect } from 'react';
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

/* type SignUpState = {
 *   username: string;
 *   password: string;
 *   confirmPassword: string;
 *   disabled: boolean;
 * }; */

export default function SignUp (props: SignUpProps) {
  const [username, handleUsername] = React.useState('');
  const [password, handlePassword] = React.useState('');
  const [confirmPwd, checkPassword] = React.useState('');
  const [disabled, toggleDisable] = React.useState(false);

  useEffect(() => {
    if (username === '' || password === '' || confirmPwd !== password) {
      toggleDisable(true);
    } else {
      toggleDisable(false);
    }
  });

  return (
    <View>
      <TextInput
        style={styles.textinput}
        placeholder="Username"
        onChangeText={(text) => handleUsername(text)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Password"
        onChangeText={(text) => handlePassword(text)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Confirm Password"
        onChangeText={(text) => checkPassword(text)}
      />
      <Button
        title="Sign Up"
        disabled={disabled}
        onPress={() => Alert.alert('signed up')}
      />
      <Text>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => props.handlePage('login')}>
          Log in
        </Text>
      </Text>
    </View>
  );
}
