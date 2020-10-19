import React from 'react';
import { LabelProps } from './LabelTypes';
import { _Label } from './LabelStyles';

export const Label = (props: LabelProps) => <_Label>{props.text}{props.input ?? null}</_Label>
