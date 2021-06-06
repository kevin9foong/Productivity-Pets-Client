import React from "react";
import {
  Text,
  Divider,
} from "@ui-kitten/components";
import { View, SafeAreaView } from "react-native";
import styles from "../../styles/HomePage.Style";
import NavBar from "../../components/NavBar";
import SideMenu from "../../components/SideMenu";
import Pet from "../../components/Pet";
import UpcomingDeadlines from "../../components/UpcomingDeadlines";
import AddTask from "../../components/AddTask";
import DailySchedule from "../../components/DailySchedule";

const homePage = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [showForm, toggleShowForm] = React.useState(false);
  const [todos, handleTodo] = React.useState([
    {
      id: 0,
      title: "go to the gym",
      desc: "",
      date: new Date(),
    },
    {
      id: 1,
      title: "finish CS2040S problem set",
      desc: "",
      date: new Date(),
    },
    {
      id: 2,
      title: "buy birthday present for Mom",
      desc: "",
      date: new Date(),
    },
  ]);
  const [schedule, handleSchedule] = React.useState([
    {
      title: "homework",
      startHour: 9,
      startMinute: 30,
      endHour: 11,
      endMinute: 0,
      date: new Date,
    }
  ])

  const sortTodos = (a: Date, b: Date) => {
    return a.getDate() - b.getDate() !== 0 
      ?  a.getDate() - b.getDate()
      : a.getMonth() - b.getMonth() !== 0
      ? a.getMonth() - b.getMonth() 
      : 0;
  }

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
        <DailySchedule schedule={schedule} handleSchedule={handleSchedule} />

        <Text style={styles.title} category="h5">
          Upcoming Deadlines
        </Text>
        {/* to do list rendered here */}
        <UpcomingDeadlines
          todos={todos.sort((a, b) => sortTodos(a.date, b.date))}
          handleTodo={handleTodo}
        />
      </View>
    </SafeAreaView>
  );
};

export default homePage;
