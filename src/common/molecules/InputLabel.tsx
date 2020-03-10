import React from 'react';
import { Label } from '../atoms/Label';
import { InputProps, Input } from '../atoms/Input';

type InputLabelProps = {
  labelText: string,
  types: InputProps['types'],
  initialValue?: string,
  placeHolder?: string,
  change?: InputProps['change']
}

export const InputLabel = (props: InputLabelProps) => (
  <Label text={props.labelText}
         input={<Input types={props.types} change={props.change} initialValue={props.initialValue}
                       placeHolder={props.placeHolder}/>}/>);
