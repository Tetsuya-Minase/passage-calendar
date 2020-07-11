import React, { useCallback, useState } from 'react';
import { InputForm } from './components/InputForm';
import { Dl } from '../../common/molecules/DescriptionList';
import { FirebaseAuth, signInWithRedirect, signOut } from '../../common/util/FirebaseAuth';
import { CalendarComponent } from '../../common/atoms/Calendar';
import { FormStateContext, SetFormStateContext, initialState } from '../../common/context/FormStateContext';
import { ButtonComponent } from '../../common/atoms/Button';

export const Top = () => {
  const NotSignedIn = useCallback(() => {
    return <ButtonComponent text="sign in" click={() => signInWithRedirect()} size='small'/>
  }, []);
  const Loading = useCallback(() => {
    return <div>loading now....</div>;
  }, []);
  const [formState, setFormState] = useState(initialState);
  return (
    <FirebaseAuth NotSignedIn={NotSignedIn} Loading={Loading}>
      <ButtonComponent text="sign out" click={signOut} size='small'/>
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
