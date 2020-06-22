import React, { useCallback, useContext, useEffect } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import { useAllDocuments } from '../util/FirebaseDataBase';
import { FormState, useFormStateContext, useSetFormStateContext } from '../context/FormStateContext';

const CalendarWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CalendarComponent: React.FC = () => {
  const { document } = useAllDocuments();
  const formState = useFormStateContext();
  const setFormState = useSetFormStateContext();
  const calendarValue = Object.values(document || {});
  useEffect(() => {
    const initialFormState: FormState = { list: [...formState.list, ...calendarValue] };
    setFormState(initialFormState);
  }, [formState.list, calendarValue]);
  const tileContent = Object.fromEntries(calendarValue.map(({ date, value }) => [new Date(date).toString(), value]));
  const tileValue = useCallback(({ date }) => {
    const dateKey = date.toString();
    return tileContent[dateKey] ? <p>{tileContent[dateKey]}</p> : null;
  }, [tileContent]);
  return <CalendarWrapper><Calendar tileContent={tileValue} locale="ja-JP"/></CalendarWrapper>;
};

