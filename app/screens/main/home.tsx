import React from 'react';
import {
  Text,
  Card,
  Divider,
  ListItem,
  List,
  Button,
  Modal,
  Input,
  Datepicker
} from '@ui-kitten/components';
import { View, Keyboard, SafeAreaView } from 'react-native';
import styles from '../../styles/HomePage.Style';
import NavBar from '../../components/NavBar';
import SideMenu from '../../components/SideMenu';

type todoObject = {
  id: number;
  title: string;
  desc: string;
  date: Date;
};

type renderitem = {
  item: todoObject;
  index: number;
};

const homePage = () => {
  let todoList;
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [showForm, toggleShowForm] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [newTitle, handleTitle] = React.useState('');
  const [newDesc, handleDesc] = React.useState('');
  const [todos, handleTodo] = React.useState([
    {
      id: 0,
      title: 'go to the gym',
      desc: '',
      date: new Date()
    },
    {
      id: 1,
      title: 'finish CS2040S problem set',
      desc: '',
      date: new Date()
    },
    {
      id: 2,
      title: 'buy birthday present for Mom',
      desc: '',
      date: new Date()
    }
  ]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  let menu;
  if (menuVisible) {
    menu = <SideMenu />;
  }

  // Creates each todo list item
  const renderItem = ({ item, index }: renderitem) => (
    <ListItem
      title={`${index + 1}: ${item.title}`}
      description={item.desc}
      onPress={() => handleTodo(todos.filter((td) => td.id !== item.id))}
    />
  );

  // the actual list component, could be abstracted away into its own component file
  // TODO: implement order by and filter, default order by date
  if (todos === undefined || todos === []) {
    todoList = (
      <Text appearance="hint" category="c2">
        You have no to dos! Click the button above to start adding some!
      </Text>
    );
  } else {
    todoList = (
      <List
        data={todos}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    );
  }

  // function for adding todos, resetting state
  const addTodo = () => {
    todos.push({
      id: todos.length,
      title: newTitle,
      desc: newDesc,
      date: date
    });
    handleTitle('');
    handleDesc('');
    setDate(new Date());
    toggleShowForm(false);
    return todos;
  };

  return (
    <SafeAreaView style={styles.view}>
      {menu}
      <View style={styles.container}>
      <NavBar toggleMenu={toggleMenu} toggleShowForm={toggleShowForm}/>
      <Divider />
        {/* Modal is the form that is shown for adding new tasks */}
        <Modal
          visible={showForm}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => toggleShowForm(false)}
          style={styles.modal}
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
                onPress={() => handleTodo(addTodo())}
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
        <Text style={styles.title} category="h2">
          Your schedule for today
        </Text>
        {/* to do list rendered here */}
        {todoList}
      </View>
    </SafeAreaView>
  );
};

export default homePage;
