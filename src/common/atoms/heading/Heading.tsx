import React from 'react';
import { HeadingProps } from './HeadingTypes';
import { getHeading } from './HeadingStyles';

export const Heading = (props: HeadingProps) => getHeading(props.text, props.level, props.position);
