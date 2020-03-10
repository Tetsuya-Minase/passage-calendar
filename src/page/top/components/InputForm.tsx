import React, { Context, Dispatch, useContext, useState } from 'react';
import { add } from '../../../actions/FormAction';
import { ButtonComponent as Button } from '../../../common/atoms/Button';
import { InputLabel } from '../../../common/molecules/InputLabel';

type Props = {
  dispatchContext: Context<Dispatch<any>>
}

export const InputForm = (props: Props) => {
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useContext(props.dispatchContext);
  return (
    <>
      <InputLabel labelText="value: " types="text" change={(e) => setValue(e.target.value)} />
      <InputLabel labelText="date: " types="date" change={(e) => setDate(e.target.value)} />
      <Button text="登録" size="small" types="primary" click={() => dispatch(add({ value, date }))}/>
    </>
  );
};
