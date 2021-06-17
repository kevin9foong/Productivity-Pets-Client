import React from 'react';
import CardList from './CardList';

type PropObject = {
  todos: Array<todoItem>;
  handleTodo: Function;
};

type displayableItem = {
  name: String;
  prefix: String;
  desc: String;
};

type todoItem = {
  id: number;
  title: string;
  desc: string;
  date: Date;
};

const UpcomingDeadlines = ({ todos, handleTodo }: PropObject) => {
  const formatTodo = (item: todoItem): displayableItem => {
    return {
      prefix: `${item.date.getDate()}/${
        item.date.getMonth() + 1
      }/${item.date.getFullYear()}`,
      name: item.title,
      desc: item.desc
    };
  };

  return <CardList data={todos.map(formatTodo)} />;
};

export default UpcomingDeadlines;
