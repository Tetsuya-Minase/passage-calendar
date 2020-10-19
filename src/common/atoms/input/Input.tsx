import React from 'react';
import { InputProps } from './InputTypes';
import { _Input } from './InputStyles';

export const Input = (props: InputProps) => <_Input type={props.types} onChange={props.change}/>;
