import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  text: string,
  click?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  size?: 'small' | 'large',
  types?: 'primary' | 'error' | 'warning'
};

const _Button = styled.button<Pick<ButtonProps, 'types' | 'size'>>`
  ${({size}) => getSize(size)}
  ${({types}) => getColor(types)}
`;

const getSize = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return css`
        width: 7.2rem;
        height: 3rem;
        font-size: 1.6rem;
      `;
    case 'large':
      return css`
        width: 30rem;
        height: 10rem;
        font-size: 2.4rem;
      `;
    default:
      return css`
        width: 15rem;
        height: 5rem;
        font-size: 1.6rem;
      `;
  }
};
const getColor = (type?: ButtonProps['types']) => {
  switch(type) {
    case 'primary':
      return css`
        background-color: #007bff;
        border: 1px solid #007bff;
        border-radius: 5px;
        color: #fff;
      `;
    default:
      return css`
        background-color: #fff;
        border: 1px solid #000;
        color: #333;
      `;
  }
};

export const Button = (props: ButtonProps) => <_Button size={props.size} types={props.types} onClick={props.click}>{props.text}</_Button>;
