import React from 'react';
import {
  Icon,
  Text,
  Card,
  Divider,
  ListItem,
  List,
  ButtonGroup,
  Button,
  Modal,
  Input,
  Datepicker
} from '@ui-kitten/components';
import { View, StyleSheet, Keyboard } from 'react-native';

const styles = StyleSheet.create({
  title: {
    margin: 5
  },
  card: {
    width: '90%'
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modal: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  input: {
    flex: 1
  },
  buttongroup: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    flex: 1
  }
});

type propObject = {
  name: String;
  todos: Array;
};

export default function homePage (props: propObject) {
  let todoList;
  const [showForm, toggleShowForm] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [newTitle, handleTitle] = React.useState('');
  const [newDesc, handleDesc] = React.useState('');

  // Creates each todo list item
  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${index + 1}: ${item.title}`}
      description={item.desc}
      onPress={() =>
        props.handleTodo(props.todos.filter((td) => td.id !== item.id))
      }
    />
  );

  // the actual list component, could be abstracted away into its own component file
  // TODO: implement order by and filter, default order by date
  if (props.todos === undefined || props.todos === []) {
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

  // function for adding todos, resetting state
  const addTodo = () => {
    props.todos.push({
      id: props.todos.length,
      title: newTitle,
      desc: newDesc,
      date: date
    });
    handleTitle('');
    handleDesc('');
    setDate(new Date());
    toggleShowForm(false);
    return props.todos;
  };

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
          <Button accessoryRight={addIcon} onPress={() => toggleShowForm(true)}>
            Add task
          </Button>
          <Button>Order By</Button>
        </ButtonGroup>
        {/* Modal is the form that is shown for adding new tasks */}
        <Modal
          visible={showForm}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => toggleShowForm(false)}
          styles={styles.modal}
        >
          <Card disabled={true}>
            <Text category="h1">Add a task here</Text>
            <Input
              style={styles.input}
              placeholder="Task"
              onChangeText={(text) => handleTitle(text)}
            />
            <Input
              style={styles.input}
              multiline={true}
              placeholder="Additional Description"
              onChangeText={(text) => handleDesc(text)}
            />
            <Datepicker
              min={new Date()}
              date={date}
              onSelect={(newDate) => setDate(newDate)}
              onFocus={() => Keyboard.dismiss()}
            />
            <View style={styles.buttongroup}>
              <Button
                style={styles.button}
                onPress={() => props.handleTodo(addTodo())}
              >
                Submit
              </Button>
              <Button
                style={styles.button}
                appearance="outline"
                onPress={() => toggleShowForm(false)}
              >
                Cancel
              </Button>
            </View>
          </Card>
        </Modal>
        {/* to do list rendered here */}
        {todoList}
      </Card>
    </View>
  );
}
