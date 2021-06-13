import React from 'react';
import {
  Text,
  Divider
} from '@ui-kitten/components';
import { View, SafeAreaView } from 'react-native';
import styles from '../../styles/HomePage.Style';
import NavBar from '../../components/navigation/NavBar';
import SideMenu from '../../components/navigation/SideMenu';
import Pet from '../../components/game/Pet';
// import UpcomingDeadlines from '../../components/todos/UpcomingDeadlines';
import AddTask from '../../components/todos/AddTask';
// import DailySchedule from '../../components/todos/DailySchedule';
import CardList from '../../components/todos/CardList';

type scheduleItem = {
  title: String;
  startHour: Number;
  startMinute: Number;
  endHour: Number;
  endMinute: Number;
  date: Date;
};

type displayableItem = {
  name: String;
  prefix: String;
  desc: String;
}

type todoItem = {
  id: number;
  title: string;
  desc: string;
  date: Date;
};

const HomePage = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [showForm, toggleShowForm] = React.useState(false);
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
  const [schedule, handleSchedule] = React.useState([
    {
      title: 'homework',
      startHour: 9,
      startMinute: 30,
      endHour: 11,
      endMinute: 0,
      date: new Date()
    }
  ]);

  const filterByDate = (item: scheduleItem) : boolean => {
    const today = new Date();
    const itemDate = item.date;
    return itemDate.getDate() === today.getDate() && itemDate.getMonth() === today.getMonth() && itemDate.getFullYear() === today.getFullYear();
  };

  const formatSched = (item: scheduleItem) : displayableItem => {
    return {
      prefix: `${item.startHour}:${item.startMinute === 0 ? '00' : item.startMinute
        } - ${item.endHour}:${item.endMinute === 0 ? '00' : item.endMinute}`,
      name: item.title,
      desc: ''
    };
  };

  const formatTodo = (item: todoItem) : displayableItem => {
    return {
      prefix: `${item.date.getDate()}/${
          item.date.getMonth() + 1
        }/${item.date.getFullYear()}`,
      name: item.title,
      desc: item.desc
    };
  };

  const formatFilterSched = () => {
    return schedule.filter(item => filterByDate(item)).map(item => formatSched(item));
  };

  const sortTodos = (a: Date, b: Date) => {
    return a.getDate() - b.getDate() !== 0
      ? a.getDate() - b.getDate()
      : a.getMonth() - b.getMonth() !== 0
        ? a.getMonth() - b.getMonth()
        : 0;
  };

  let menu;
  if (menuVisible) {
    menu = <SideMenu />;
  }

  return (
    <SafeAreaView style={styles.view}>
      {menu}
      <View style={styles.container}>
        <NavBar
          menuVisible={menuVisible}
          toggleMenu={setMenuVisible}
          toggleShowForm={toggleShowForm}
        />
        <Divider style={styles.divider} />
        <Pet />

        {/* Modal is the form that is shown for adding new tasks */}
        <AddTask
          showForm={showForm}
          toggleShowForm={toggleShowForm}
          todos={todos}
          handleTodo={handleTodo}
          schedule={schedule}
          handleSchedule={handleSchedule}
        />

        <Text style={styles.title} category="h5">
          Daily Schedule
        </Text>
        {/* <DailySchedule schedule={schedule} handleSchedule={handleSchedule} /> */}
        <CardList data={formatFilterSched()} />

        <Text style={styles.title} category="h5">
          Upcoming Deadlines
        </Text>
        {/* to do list rendered here */}
        {/* <UpcomingDeadlines
          todos={todos.sort((a, b) => sortTodos(a.date, b.date))}
          handleTodo={handleTodo}
        /> */}
        <CardList data={todos.sort((a, b) => sortTodos(a.date, b.date)).map(formatTodo)} />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
