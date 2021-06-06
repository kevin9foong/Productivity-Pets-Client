import React from "react";
import {
  Text,
  Card,
  Button,
  Modal,
  Input,
  Datepicker,
  CheckBox,
} from "@ui-kitten/components";
import { View, Keyboard } from "react-native";
import styles from "../styles/AddTask.Style";
import DateTimePicker from "@react-native-community/datetimepicker";

type todoObject = {
  id: number;
  title: string;
  desc: string;
  date: Date;
};

type scheduleItem = {
  title: String;
  startHour: Number;
  startMinute: Number;
  endHour: Number;
  endMinute: Number;
  date: Date;
};

type PropObject = {
  showForm: boolean;
  toggleShowForm: Function;
  todos: Array<todoObject>;
  handleTodo: Function;
  schedule: Array<scheduleItem>;
  handleSchedule: Function;
};

const AddTask = ({
  showForm,
  toggleShowForm,
  todos,
  handleTodo,
  schedule,
  handleSchedule,
}: PropObject) => {
  const [date, setDate] = React.useState(new Date());
  const [newTitle, handleTitle] = React.useState("");
  const [newDesc, handleDesc] = React.useState("");
  const [showTime, toggleTime] = React.useState(false);
  const [startTime, handleStartTime] = React.useState(new Date());
  const [endTime, handleEndTime] = React.useState(new Date());

  // function for adding todos, resetting state
  const addTodo = () => {
    todos.push({
      id: todos.length,
      title: newTitle,
      desc: newDesc,
      date: date,
    });
    handleTitle("");
    handleDesc("");
    setDate(new Date());
    toggleShowForm(false);
    return todos;
  };

  const addToSchedule = () => {
    schedule.push({
      title: newTitle,
      startHour: startTime.getHours(),
      startMinute: startTime.getMinutes(),
      endHour: endTime.getHours(),
      endMinute: endTime.getMinutes(),
      date: date,
    });
    handleTitle("");
    handleDesc("");
    handleStartTime(new Date());
    handleEndTime(new Date());
    setDate(new Date());
    toggleShowForm(false);
    return schedule;
  };

  return (
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
        <CheckBox
          style={styles.check}
          checked={showTime}
          onChange={() => toggleTime(!showTime)}
        >
          Add to Schedule
        </CheckBox>

        {showTime && (
          <View style={styles.date}>
            <View style={styles.picker}>
              <Text style={styles.input}>Start Time: </Text>
              <DateTimePicker
                style={styles.input}
                mode="time"
                value={startTime}
                onChange={(e, date) =>
                  date !== undefined ? handleStartTime(date) : {}
                }
              />
            </View>
            <View style={styles.picker}>
              <Text style={styles.input}>End Time: </Text>
              <DateTimePicker
                style={styles.input}
                mode="time"
                value={endTime}
                onChange={(e, date) =>
                  date !== undefined ? handleEndTime(date) : {}
                }
              />
            </View>
          </View>
        )}

        <View style={styles.buttongroup}>
          <Button
            style={styles.button}
            onPress={() =>
              showTime ? handleSchedule(addToSchedule()) : handleTodo(addTodo())
            }
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
  );
};

export default AddTask;
