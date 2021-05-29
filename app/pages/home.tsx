import React from 'react';
import {
  Icon,
  Text,
  Card,
  Divider,
  ListItem,
  List,
  ButtonGroup,
  Button
} from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    margin: 5
  },
  card: {
    width: '90%'
  }
});

type propObject = {
  name: String;
  todos: Array;
};

export default function homePage (props: propObject) {
  let todoList;

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${index + 1}: ${item.title}`}
      onPress={(x) =>
        props.handleTodo(props.todos.filter((td) => td.id !== item.id))
      }
    />
  );

  // TODO: implement order by and filter, default order by date
  if (props.todos === undefined) {
    todoList = (
      <Text appearance="hint" category="c2">
        You have no to dos! Click the button above to start adding some!
      </Text>
    );
  } else {
    todoList = (
      <List
        data={props.todos}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    );
  }

  const filterIcon = (props) => <Icon {...props} name="funnel" />;

  const addIcon = (props) => <Icon {...props} name="plus" />;

  return (
    <View>
      <Card style={styles.card}>
        <Text style={styles.title} category="h1">
          Productivity Pets!
        </Text>
        <Text>Welcome to your homepage, {props.name}</Text>
        <Divider />
        <ButtonGroup size="small">
          <Button accessoryRight={filterIcon}>Filter</Button>
          <Button accessoryRight={addIcon}>Add task</Button>
          <Button>Order By</Button>
        </ButtonGroup>
        {todoList}
      </Card>
    </View>
  );
}
