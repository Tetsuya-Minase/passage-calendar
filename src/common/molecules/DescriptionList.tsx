import React from 'react';
import styled from 'styled-components';
import { differenceInDays, parseISO } from 'date-fns';
import { useFormStateContext } from '../context/FormStateContext';

const _DescriptionList = styled.dl`
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 60rem;
`;
const _DescriptionTerm = styled.dt`
  border-bottom: 1px solid #333;
  min-width: 20rem;
`;
const _Description = styled.dd`
  min-width: 20rem;
`;

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
