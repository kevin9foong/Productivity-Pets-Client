import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from '@ui-kitten/components';

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
});

type SignUpProps = {
  handlePage: (page: string) => void;
  handleUserName: (name: string) => void;
};

/* type SignUpState = {
 *   username: string;
 *   password: string;
 *   confirmPassword: string;
 *   disabled: boolean;
 * }; */

export default function SignUp (props: SignUpProps) {
  const [username, handleUsername] = useState('');
  const [password, handlePassword] = useState('');
  const [confirmPwd, checkPassword] = useState('');
  const [disabled, toggleDisable] = useState(false);

  useEffect(() => {
    if (username === '' || password === '' || confirmPwd !== password) {
      toggleDisable(true);
    } else {
      toggleDisable(false);
    }
  });

  return (
    <View>
      <Input
        placeholder="Username"
        onChangeText={(text) => handleUsername(text)}
      />
      <Input
        placeholder="Password"
        onChangeText={(text) => handlePassword(text)}
      />
      <Input
        placeholder="Confirm Password"
        onChangeText={(text) => checkPassword(text)}
      />
      <Button
        disabled={disabled}
        onPress={() => {
          props.handlePage('home');
          props.handleUserName(username);
        }}
      >
        Sign Up
      </Button>
      <Text>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => props.handlePage('login')}>
          Log in
        </Text>
      </Text>
    </View>
  );
}
