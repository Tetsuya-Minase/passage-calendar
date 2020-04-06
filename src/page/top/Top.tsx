import React, { Dispatch, useReducer } from 'react';
import { InputForm } from './components/InputForm';
import { initialState, formReducer, FormState } from '../../reducers/FormReducer';
import { differenceInDays, parseISO } from 'date-fns';

export const Top = () => {
  const FormContext = React.createContext<FormState>(null as any);
  const DispatchContext = React.createContext<Dispatch<any>>(null as any);
  const [state, dispatch] = useReducer(formReducer, initialState);
  // TODO: 日付処理はどこかに移動
  const calculatePassage = (date: string) => `${differenceInDays(new Date(), parseISO(date))}日`;
  return (
    <FormContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <InputForm dispatchContext={DispatchContext}/>
      </DispatchContext.Provider>
      {state.list.length === 0 ? null : state.list.map((item, index) => (
        <dl key={index}>
          <dt>value:</dt>
          <dd>{item.value}</dd>
          <dt>date:</dt>
          <dd>{item.date}</dd>
          <dt>経過日数</dt>
          <dd>{calculatePassage(item.date)}</dd>
        </dl>
      ))}
    </FormContext.Provider>
  );
};
