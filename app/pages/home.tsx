import React from 'react';
import { Text, Card } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    margin: 5
  },
  card: {
    width: '90%'
  }
});

type homePageProps = {
  name: string
}

export default function homePage (props: homePageProps) {
  return (
    <View>
      <Card style={styles.card}>
        <Text style={styles.title} category="h1">
          Productivity Pets!
        </Text>
        <Text>Welcome to your homepage, {props.name}</Text>
      </Card>
    </View>
  );
}
