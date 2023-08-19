import React from 'react';
import { styled } from 'styled-components';

const DetailTab = () => {
  return (
    <DetailTabContainer>
      <h1>SK Ecoplant excels in waste dispoal with its cost-effective approach.</h1>
      <img src={'/company.png'} alt="" />
      <p>
        Offering services at competitive rates, they ensure top value for clients. Their
        swift processing minimizes potential risks. Their swift processing minimizes
        potential risks. The standout feature is their use of JAKAs advanced robotics.{' '}
      </p>
    </DetailTabContainer>
  );
};

export default DetailTab;

const DetailTabContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 38px 20px 0;

  & > h1 {
    margin: 0;
    color: #101010;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }

  & > p {
    margin: 0;
    color: #666;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
`;
