import React from 'react';
import { ListItem, List, Text, Divider } from '@ui-kitten/components';

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

type PropObject = {
  todos: Array<todoObject>;
  handleTodo: Function;
};

const UpcomingDeadlines = ({ todos, handleTodo }: PropObject) => {
  let todoList;
  const renderItem = ({ item, index }: renderitem) => {
    return (
      <ListItem
        title={`${item.date.getDate()}/${
          item.date.getMonth() + 1
        }/${item.date.getFullYear()}: ${item.title}`}
        description={item.desc}
        onPress={() => handleTodo(todos.filter((td) => td.id !== item.id))}
      />
    );
  };

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

  return todoList;
};

export default UpcomingDeadlines;
