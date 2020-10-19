import React from 'react';
import styled from 'styled-components';
import { differenceInDays, parseISO } from 'date-fns';
import { useFormStateContext } from '../context/FormStateContext';
import { Heading } from '../atoms/heading/Heading';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin: 1rem 0;
`;

const DescriptionList = styled.dl`
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 60rem;
`;
const DescriptionTerm = styled.dt`
  border-bottom: 1px solid #333;
  min-width: 20rem;
`;
const Description = styled.dd`
  min-width: 20rem;
`;

const calculatePassage = (date: string) => `${differenceInDays(new Date(), parseISO(date))}日`;

export const Dl: React.FC = () => {
  const items = useFormStateContext();
  return (
    <section>
      <Heading text="登録データ" level={1} position="center" />
      <Wrapper>
        <div>
          <DescriptionList>
            <DescriptionTerm>内容</DescriptionTerm>
            <DescriptionTerm>登録日</DescriptionTerm>
            <DescriptionTerm>経過日数</DescriptionTerm>
          </DescriptionList>
          {items.list.map(({ value, date }) => (
            <DescriptionList key={`${value}:${date}`}>
              <Description>{value}</Description>
              <Description>{date}</Description>
              <Description>{calculatePassage(date)}</Description>
            </DescriptionList>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
