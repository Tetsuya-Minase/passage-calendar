import React, { useCallback, useContext, useEffect } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import { useAllDocuments } from '../util/FirebaseDataBase';
import { FormStateContext, SetFormStateContext } from '../context/FormStateContext';

const CalendarWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CalendarComponent: React.FC = () => {
  const { document } = useAllDocuments();
  const formState = useContext(FormStateContext);
  const setFormState = useContext(SetFormStateContext);
  console.log(setFormState);
  const calendarValue = Object.values(document || {});
  console.log('formState.list:', formState.list);
  console.log('calendarValue: ', calendarValue);
  useEffect(() => {
    const initialFormState = { list: [...formState.list, ...calendarValue] };
    console.log('initialFormState', initialFormState);
    setFormState(initialFormState);
  }, [formState.list, calendarValue]);
  const tileContent = Object.fromEntries(calendarValue.map(({ date, value }) => [new Date(date).toString(), value]));
  const tileValue = useCallback(({ date }) => {
    const dateKey = date.toString();
    return tileContent[dateKey] ? <p>{tileContent[dateKey]}</p> : null;
  }, [tileContent]);
  return <CalendarWrapper><Calendar tileContent={tileValue} locale="ja-JP"/></CalendarWrapper>;
};

