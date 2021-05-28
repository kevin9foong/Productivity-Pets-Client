import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input, Card } from '@ui-kitten/components';

const styles = StyleSheet.create({
  text: {
    margin: 2
  },
  title: {
    margin: 5
  },
  card: {
    width: '90%'
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
      <Card style={styles.card}>
        <Text style={styles.title} category="h1">
          Productivity Pets!
        </Text>
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
          appearance="outline"
          onPress={() => {
            props.handlePage('home');
            props.handleUserName(username);
          }}
        >
          Sign Up
        </Button>
        <Text style={styles.text} appearance="hint" category="c1">
          Already have an account?{' '}
          <Text
            status="primary"
            appearance="ghost"
            onPress={() => props.handlePage('login')}
          >
            Log in
          </Text>
        </Text>
      </Card>
    </View>
  );
}
