import React from 'react';
import styled from 'styled-components';

type InputProps = {
  types: 'text' | 'password' | 'date',
  initialValue?: string,
  placeHolder?: string,
  change?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const _Input = styled.input``;

export const Input = (props: InputProps) => <_Input type={props.types} onChange={props.change}/>;
