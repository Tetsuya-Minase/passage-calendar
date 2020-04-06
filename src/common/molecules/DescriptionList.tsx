import React from 'react';
import styled from 'styled-components';
import { differenceInDays, parseISO } from 'date-fns';
import { FormValue } from '../../reducers/FormReducer';

type DescriptionListProps = {
  items: FormValue[]
}

const _DescriptionList = styled.dl`
  display: flex;
`;
const _DescriptionTerm = styled.dt``;
const _Description = styled.dd``;

// TODO: 日付処理はどこかに移動
const calculatePassage = (date: string) => `${differenceInDays(new Date(), parseISO(date))}日`;

export const Dl: React.FC<DescriptionListProps> = props => (
  <>
    <_DescriptionList>
      <_DescriptionTerm>内容</_DescriptionTerm>
      <_DescriptionTerm>登録日</_DescriptionTerm>
      <_DescriptionTerm>経過日数</_DescriptionTerm>
    </_DescriptionList>
    {props.items.map((item, index) => (
      <_DescriptionList key={index}>
        <_Description>{item.value}</_Description>
        <_Description>{item.date}</_Description>
        <_Description>{calculatePassage(item.date)}</_Description>
      </_DescriptionList>
    ))}
  </>
);
