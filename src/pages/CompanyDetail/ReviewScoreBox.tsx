import React from 'react';
import { styled } from 'styled-components';

import ReviewStatusBar from './ReviewStatusBar';

interface Props {
  totalReview: number;
}

const ReviewScoreBox = ({ totalReview }: Props) => {
  return (
    <ReviewScoreStyled>
      <ReviewStatusBar score={5} count={223} totalReview={totalReview} />
      <ReviewStatusBar score={4} count={5} totalReview={totalReview} />
      <ReviewStatusBar score={3} count={3} totalReview={totalReview} />
      <ReviewStatusBar score={2} count={0} totalReview={totalReview} />
      <ReviewStatusBar score={1} count={0} totalReview={totalReview} />
    </ReviewScoreStyled>
  );
};

export default ReviewScoreBox;

const ReviewScoreStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0 20px 0 16px;
  gap: 4px;
`;
