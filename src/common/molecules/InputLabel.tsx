import React from 'react';
import { Label } from '../atoms/label/Label';
import { Input } from '../atoms/input/Input';
import { InputProps } from '../atoms/input/InputTypes';

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
