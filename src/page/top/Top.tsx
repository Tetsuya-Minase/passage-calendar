import React, { useCallback, useState } from 'react';
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
  console.log('formState in Top: ', formState);
  return (
    <FirebaseAuth NotSignedIn={NotSignedIn} Loading={Loading}>
      <button onClick={signOut}>sign out</button>
      <FormStateContext.Provider value={formState}>
        <SetFormStateContext.Provider value={setFormState}>
          <InputForm/>
          {!formState.list.length ? null : <Dl items={formState.list}/>}
        </SetFormStateContext.Provider>
        <CalendarComponent/>
      </FormStateContext.Provider>
    </FirebaseAuth>
  );
};
