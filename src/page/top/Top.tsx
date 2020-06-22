import React, { createContext, Dispatch, SetStateAction, useCallback, useState } from 'react';
import { InputForm } from './components/InputForm';
import { Dl } from '../../common/molecules/DescriptionList';
import { FirebaseAuth, signInWithRedirect, signOut } from '../../common/util/FirebaseAuth';
import { CalendarComponent } from '../../common/atoms/Calendar';
import { FormStateContext, SetFormStateContext, initialState } from '../../common/context/FormStateContext';

export const Top = () => {
  const NotSignedIn = useCallback(() => {
    return <button onClick={() => signInWithRedirect()}>サインイン</button>;
  }, []);
  const Loading = useCallback(() => {
    return <div>loading now....</div>;
  }, []);
  const [formState, setFormState] = useState(initialState);
  return (
    <FirebaseAuth NotSignedIn={NotSignedIn} Loading={Loading}>
      <button onClick={signOut}>sign out</button>
      <FormStateContext.Provider value={formState}>
        <SetFormStateContext.Provider value={setFormState}>
          <InputForm/>
          <Dl/>
          <CalendarComponent/>
        </SetFormStateContext.Provider>
      </FormStateContext.Provider>
    </FirebaseAuth>
  );
};
