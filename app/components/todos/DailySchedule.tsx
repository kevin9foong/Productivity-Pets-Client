import React from 'react';
import CardList from './CardList';

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
};

type propObject = {
  schedule: Array<scheduleItem>;
  handleSchedule: Function;
};

const DailySchedule = ({ schedule, handleSchedule }: propObject) => {
  const filterSched = (item: scheduleItem): boolean => {
    const today = new Date();
    const itemDate = item.date;
    return (
      itemDate.getDate() === today.getDate() &&
      itemDate.getMonth() === today.getMonth() &&
      itemDate.getFullYear() === today.getFullYear()
    );
  };

  const formatSched = (item: scheduleItem): displayableItem => {
    return {
      prefix: `${item.startHour}:${
        item.startMinute === 0 ? '00' : item.startMinute
      } - ${item.endHour}:${item.endMinute === 0 ? '00' : item.endMinute}`,
      name: item.title,
      desc: ''
    };
  };

  const formatFilterSched = () => {
    return schedule.filter(filterSched).map(formatSched);
  };

  return <CardList data={formatFilterSched()} />;
};

export default DailySchedule;
