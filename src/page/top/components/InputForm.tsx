import React, { Context, Dispatch, useContext, useState } from 'react';
import { add } from '../../../actions/FormAction';
import { ButtonComponent as Button } from '../../../common/atoms/Button';

type Props = {
  dispatchContext:  Context<Dispatch<any>>
}

export const InputForm = (props: Props) => {
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useContext(props.dispatchContext);
  return (
    <>
      <label>value: <input type="text" onChange={(e) => setValue(e.target.value)}/></label>
      <label>date: <input type="text" onChange={(e) => setDate(e.target.value)}/></label>

      <Button text="登録" size="small" types="primary" click={() => dispatch(add({ value, date }))}/>
    </>
  );
};
