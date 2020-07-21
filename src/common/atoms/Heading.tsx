import React from 'react';
import styled, { css } from 'styled-components';

type HeadingProps = {
  text: string;
  level: number;
  position: 'left' | 'center' | 'right'
}

const Level1 = styled.h1<Pick<HeadingProps, 'position'>>`
  font-size: 2.4rem;
  ${({position}) => getPosition(position)}
`;
const Level2 = styled.h2<Pick<HeadingProps, 'position'>>`
  font-size: 2rem;
  ${({position}) => getPosition(position)}
`;
const Level3 = styled.h3<Pick<HeadingProps, 'position'>>`
  font-size: 1.8rem;
  ${({position}) => getPosition(position)}
`;
const getPosition = (position: HeadingProps['position']) => {
  switch (position) {
    case 'left':
      return css`text-align: left;`;
    case 'center':
      return css`text-align: center;`;
    case 'right':
      return css`text-align: right;`;
  }
}

const getHeading = (text: string, level: number, position: HeadingProps['position']): JSX.Element | null => {
  switch(level) {
    case 1:
      return <Level1 position={position}>{text}</Level1>;
    case 2:
      return <Level2 position={position}>{text}</Level2>;
    case 3:
      return <Level3 position={position}>{text}</Level3>;
    default:
      return null;
  }
}

export const Heading = (props: HeadingProps) => getHeading(props.text, props.level, props.position);
