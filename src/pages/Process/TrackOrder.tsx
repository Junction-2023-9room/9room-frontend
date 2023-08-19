import React, { useState } from 'react';
import { styled } from 'styled-components';

import TrackOrderList from './TrackOrderList';

const TrackOrder = () => {
  const [stage, setStage] = useState(0);

  return (
    <TrackOrderContainer>
      <h1>Track order</h1>
      <div>
        <ProgresWrapper>
          <Line $percent={stage * 33.33} />
        </ProgresWrapper>
        <TrackOrderList stage={stage} />
      </div>
    </TrackOrderContainer>
  );
};

export default TrackOrder;

const TrackOrderContainer = styled.div`
  margin: 0 20px;
  padding: 18px 18px 24px;
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid gray;

  & > h1 {
    margin: 0;
    margin-bottom: 24px;
    padding: 0;
    color: #323232;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }

  & > div {
    display: flex;
  }
`;

const ProgresWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  width: 50px;
  height: 250px;
`;

const Line = styled.div<{ $percent: number }>`
  width: 10px;
  height: 100%;
  border-radius: 25px;
  background: linear-gradient(
    180deg,
    rgba(76, 53, 255, 1) ${({ $percent }) => $percent}%,
    rgba(217, 217, 217, 1) 100%
  );
`;
