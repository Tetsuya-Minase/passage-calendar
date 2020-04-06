import React, { Dispatch, useReducer } from 'react';
import { InputForm } from './components/InputForm';
import { initialState, formReducer, FormState } from '../../reducers/FormReducer';
import { Dl } from '../../common/molecules/DescriptionList';

export const Top = () => {
  const FormContext = React.createContext<FormState>(null as any);
  const DispatchContext = React.createContext<Dispatch<any>>(null as any);
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <FormContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <InputForm dispatchContext={DispatchContext}/>
      </DispatchContext.Provider>
      {state.list.length === 0 ? null : <Dl items={state.list}/>}
    </FormContext.Provider>
  );
};
