import React, { useCallback } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import { useAllDocuments } from '../util/FirebaseDataBase';

const CalendarWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CalendarComponent: React.FC = () => {
  const { document } = useAllDocuments();
  const calendarValue = Object.values(document || {});
  const tileContent = Object.fromEntries(calendarValue.map((c: any) => [new Date(c.date).toString(), c.value]));
  const tileValue = useCallback(({ date }) => {
    const dateKey = date.toString();
    return tileContent[dateKey] ? <p>{tileContent[dateKey]}</p> : null;
  }, [tileContent]);
  return <CalendarWrapper><Calendar tileContent={tileValue} locale="ja-JP"/></CalendarWrapper>;
};

