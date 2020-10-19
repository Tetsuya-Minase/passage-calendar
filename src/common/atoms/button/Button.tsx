import React from 'react';
import { _Button } from './ButtonStyle';
import { ButtonProps } from './ButtonTypes';

export const Button = (props: ButtonProps) => <_Button size={props.size} types={props.types} position={props.position}
                                                       onClick={props.click}>{props.text}</_Button>;
