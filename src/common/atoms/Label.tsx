import React from 'react';
import styled from 'styled-components';
import { Input } from './Input';

export type LabelProps = {
  text: string,
  input?: ReturnType<typeof Input>,
  isBlock?: boolean
}

const _Label = styled.label<Pick<LabelProps, 'isBlock'>>`
  font-size: 1.6rem;
  ${(isBlock) => isBlock ? `display: block;` : ``}
`;

export const Label = (props: LabelProps) => <_Label>{props.text}{props.input ?? null}</_Label>
