import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
  Pet: {
    marginVertical: 10
  }
});

const Pet = () => {
  return (
    <Card style={styles.Pet}>
      <Text>Pet goes here</Text>
    </Card>
  );
};
export default Pet;
