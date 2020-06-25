import React from 'react';
import styled from 'styled-components';
import { differenceInDays, parseISO } from 'date-fns';
import { useFormStateContext } from '../context/FormStateContext';

const _DescriptionList = styled.dl`
  display: flex;
`;
const _DescriptionTerm = styled.dt``;
const _Description = styled.dd``;

// TODO: 日付処理はどこかに移動
const calculatePassage = (date: string) => `${differenceInDays(new Date(), parseISO(date))}日`;

export const Dl: React.FC = () => {
  const items = useFormStateContext();
  return (
    <>
      <_DescriptionList>
        <_DescriptionTerm>内容</_DescriptionTerm>
        <_DescriptionTerm>登録日</_DescriptionTerm>
        <_DescriptionTerm>経過日数</_DescriptionTerm>
      </_DescriptionList>
      {items.list.map(({ value, date }) => (
        <_DescriptionList key={`${value}:${date}`}>
          <_Description>{value}</_Description>
          <_Description>{date}</_Description>
          <_Description>{calculatePassage(date)}</_Description>
        </_DescriptionList>
      ))}
    </>
  );
};
