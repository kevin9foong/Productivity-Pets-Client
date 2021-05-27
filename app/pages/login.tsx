import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from '../styles/login.style';

type LoginProps = {
  };

const Login: React.FC<LoginProps> = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.logo}>Productivity Pets</Text>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.inputText}>Authenticate With Google</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Login;
