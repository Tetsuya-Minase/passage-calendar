import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  text: string,
  click?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  size?: 'small' | 'large',
  types?: 'primary' | 'error' | 'warning'
};

const Button = styled.button<Pick<ButtonProps, 'types' | 'size'>>`
  ${({size}) => getSize(size)}
  ${({types}) => getColor(types)}
`;

const getSize = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return css`
        width: 72px;
        height: 30px;
        font-size: 10px;
      `;
    case 'large':
      return css`
        width: 300px;
        height: 100px;
        font-size: 24px;
      `;
    default:
      return css`
        width: 150px;
        height: 50px;
        font-size: 16px;
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

export const ButtonComponent = (props: ButtonProps) => <Button size={props.size} types={props.types} onClick={props.click}>{props.text}</Button>;
