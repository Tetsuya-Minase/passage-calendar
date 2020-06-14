import React, { useCallback } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const CalendarWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

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
  return <CalendarWrapper><Calendar tileContent={tileValue} locale="ja-JP"/></CalendarWrapper>;
};

