import React from 'react';
import styled from 'styled-components';
import { Input } from './Input';

export type LabelProps = {
  text: string,
  input?: ReturnType<typeof Input>
}

const _Label = styled.label``;

export const Label = (props: LabelProps) => <_Label>{props.text}{props.input ?? null}</_Label>
