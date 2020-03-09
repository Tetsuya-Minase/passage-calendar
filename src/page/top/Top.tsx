import React, { Dispatch, useReducer } from 'react';
import { InputForm } from './components/InputForm';
import { initialState, formReducer, FormState } from '../../reducers/FormReducer';

export const Top = () => {
  const FormContext = React.createContext<FormState>(null as any);
  const DispatchContext = React.createContext<Dispatch<any>>(null as any);
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={state ?? initialState}>
      <DispatchContext.Provider value={dispatch}>
        <InputForm  dispatchContext={DispatchContext}/>
        <div>{state?.value}</div>
        <div>{state?.date}</div>
      </DispatchContext.Provider>
    </FormContext.Provider>
  );
};
