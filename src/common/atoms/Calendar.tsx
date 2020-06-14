import React, { useCallback } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type IProps = {
  [key: string]: Document;
}

export const CalendarComponent: React.FC<IProps> = (props) => {
  const calendarValue = Object.values(props);
  const tileContent = Object.fromEntries(calendarValue.map((c: any) => [new Date(c.date).toString(), c.value]));
  const tileValue = useCallback(({ date }) => {
    const dateKey = date.toString();
    return tileContent[dateKey] ? <p>{tileContent[dateKey]}</p> : null;
  }, [tileContent]);
  return <div><Calendar tileContent={tileValue} locale="ja-JP"/></div>;
};

