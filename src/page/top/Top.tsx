import React, { Dispatch, useReducer } from 'react';
import { InputForm } from './components/InputForm';
import { initialState, formReducer, FormState } from '../../reducers/FormReducer';
import { Dl } from '../../common/molecules/DescriptionList';
import { FirebaseAuth, signInWithRedirect, signOut } from '../../common/js/FirebaseAuth';

export const Top = () => {
  const NotSignedIn = React.useCallback(() => {
    return <button onClick={() => signInWithRedirect()}>signIn</button>;
  }, []);
  const Loading = React.useCallback(() => {
    return <div>loading now....</div>;
  }, []);
  const FormContext = React.createContext<FormState>(null as any);
  const DispatchContext = React.createContext<Dispatch<any>>(null as any);
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
    </>
  );
};
