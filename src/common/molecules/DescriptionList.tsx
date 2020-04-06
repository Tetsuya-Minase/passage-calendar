import React from 'react';
import styled from 'styled-components';
import { differenceInDays, parseISO } from 'date-fns';

type DescriptionListProps = {
  value: string,
  date: string
}

const _DescriptionList = styled.dl`
  display: flex;
`;
const _DescriptionTerm = styled.dt``;
const _Description = styled.dd``;

// TODO: 日付処理はどこかに移動
const calculatePassage = (date: string) => `${differenceInDays(new Date(), parseISO(date))}日`;

export const Dl: React.FC<DescriptionListProps> = props => (
  <_DescriptionList>
    <_DescriptionTerm>value: </_DescriptionTerm>
    <_Description>{props.value}</_Description>
    <_DescriptionTerm>date: </_DescriptionTerm>
    <_Description>{props.date}</_Description>
    <_DescriptionTerm>経過日数: </_DescriptionTerm>
    <_Description>{calculatePassage(props.date)}</_Description>
  </_DescriptionList>
);
