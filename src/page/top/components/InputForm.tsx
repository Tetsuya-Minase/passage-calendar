import React, { Context, Dispatch, useContext, useState } from 'react';
import { add } from '../../../actions/FormAction';
import { ButtonComponent as Button } from '../../../common/atoms/Button';
import { Input } from '../../../common/atoms/Input';

type Props = {
  dispatchContext:  Context<Dispatch<any>>
}

export const InputForm = (props: Props) => {
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useContext(props.dispatchContext);
  return (
    <>
      <label>value: <Input types="text" change={(e) => setValue(e.target.value)} /></label>
      <label>date: <Input types="date" change={(e) => setDate(e.target.value)} /></label>
      <Button text="登録" size="small" types="primary" click={() => dispatch(add({ value, date }))}/>
    </>
  );
};
