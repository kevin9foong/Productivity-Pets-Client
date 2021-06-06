import React from "react";
import { Text, ListItem, List, Divider } from "@ui-kitten/components";

type scheduleItem = {
  title: String;
  startHour: Number;
  startMinute: Number;
  endHour: Number;
  endMinute: Number;
  date: Date;
};

type renderitem = {
    item: scheduleItem;
    index: Number;
}

type propObject = {
  schedule: Array<scheduleItem>;
  handleSchedule: Function;
};

const DailySchedule = ({ schedule, handleSchedule }: propObject) => {
    let displaySchedule;

    const renderItem = ({ item, index }: renderitem) => {
        return (
          <ListItem
            title={`${item.startHour}:${
              item.startMinute === 0 ? "00" : item.startMinute} - ${item.endHour}:${item.endMinute === 0 ? "00" : item.endMinute} : ${item.title}`}
            // onPress={() => handleTodo(todos.filter((td) => td.id !== item.id))} // can add deletion or editing features in the future
          />
        );
      };

      if (schedule === undefined || schedule === []) {
        displaySchedule = (
          <Text appearance="hint" category="c2">
            You have no to dos! Click the button above to start adding some!
          </Text>
        );
      } else {
        displaySchedule = (
          <List
            data={schedule}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        );
      }
    
  return displaySchedule
};

export default DailySchedule;
