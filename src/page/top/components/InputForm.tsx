import React, { useCallback, useState } from 'react';
import { Button } from '../../../common/atoms/Button';
import { InputLabel } from '../../../common/molecules/InputLabel';
import {
  useFormStateContext,
  useSetFormStateContext
} from '../../../common/context/FormStateContext';
import { useDatabaseDocument } from '../../../common/util/FirebaseDataBase';

export const InputForm: React.FC = () => {
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const formState = useFormStateContext();
  const setFormState = useSetFormStateContext();
  const updateFormState = useCallback(() => {
    return [...formState.list, {value, date}]
  }, [formState, value, date]);
  const { updateFormValue } = useDatabaseDocument();
  return (
    <>
      <InputLabel labelText="value: " types="text" change={(e) => setValue(e.target.value)} />
      <InputLabel labelText="date: " types="date" change={(e) => setDate(e.target.value)} />
      <Button text="登録" size="small" types="primary" click={() => {
        setFormState({ list: updateFormState() });
        updateFormValue({list: updateFormState()});
      }}/>
    </>
  );
};
