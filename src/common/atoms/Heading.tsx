import React from 'react';
import styled from 'styled-components';

type HeadingProps = {
  text: string;
  level: number;
}

const Level1 = styled.h1`
  font-size: 2.4rem;
`;
const Level2 = styled.h2`
  font-size: 2rem;
`;
const Level3 = styled.h3`
  font-size: 1.8rem;
`;

const getHeading = (text: string, level: number): JSX.Element | null => {
  switch(level) {
    case 1:
      return <Level1>{text}</Level1>;
    case 2:
      return <Level2>{text}</Level2>;
    case 3:
      return <Level3>{text}</Level3>;
    default:
      return null;
  }
}

export const Heading = (props: HeadingProps) => getHeading(props.text, props.level);
