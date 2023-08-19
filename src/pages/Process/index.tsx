import React from 'react';
import styled from 'styled-components';

const Index = () => {
  return (
    <div>
      <Heading2>Progress Status</Heading2>
      <Heading1>
        Your Disposal Journey <br /> with <span>Java</span> EcoDisposal
      </Heading1>
    </div>
  );
};

export default Index;

const Heading2 = styled.h2`
  color: #4c35ff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 18px */
`;

const Heading1 = styled.h1`
  color: #101010;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 28px */
`;
