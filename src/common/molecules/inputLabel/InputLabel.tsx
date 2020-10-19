import React from 'react';
import { Label } from '../../atoms/label/Label';
import { Input } from '../../atoms/input/Input';
import { InputLabelProps } from './InputLabelTypes';



export const InputLabel = (props: InputLabelProps) => (
  <Label text={props.labelText}
         input={<Input types={props.types} change={props.change} initialValue={props.initialValue}
                       placeHolder={props.placeHolder}/>}/>);
