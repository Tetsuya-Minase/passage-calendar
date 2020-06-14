import React, { Dispatch, useReducer, createContext, useCallback } from 'react';
import { InputForm } from './components/InputForm';
import { initialState, formReducer, FormState } from '../../reducers/FormReducer';
import { Dl } from '../../common/molecules/DescriptionList';
import { FirebaseAuth, signInWithRedirect, signOut } from '../../common/util/FirebaseAuth';
import { useAllDocuments } from '../../common/util/FirebaseDataBase';
import { CalendarComponent } from '../../common/atoms/Calendar';

export const Top = () => {
  const NotSignedIn = useCallback(() => {
    return <button onClick={() => signInWithRedirect()}>サインイン</button>;
  }, []);
  const Loading = useCallback(() => {
    return <div>loading now....</div>;
  }, []);
  const { document, loaded } = useAllDocuments();
  const FormContext = createContext<FormState | undefined>(undefined);
  const DispatchContext = createContext<Dispatch<any> | undefined>(undefined);
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <>
      <FirebaseAuth NotSignedIn={NotSignedIn} Loading={Loading}>
        <button onClick={signOut}>sign out</button>
      </FirebaseAuth>
        <FormContext.Provider value={state}>
          <DispatchContext.Provider value={dispatch}>
            <InputForm dispatchContext={DispatchContext}/>
          </DispatchContext.Provider>
          {state.list.length === 0 ? null : <Dl items={state.list}/>}
        </FormContext.Provider>
        <CalendarComponent {...document} />
    </>
  );
};
