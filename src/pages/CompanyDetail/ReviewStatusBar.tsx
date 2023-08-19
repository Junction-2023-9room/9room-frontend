import React from 'react';
import { styled } from 'styled-components';

interface Props {
  score: number;
  count: number;
  totalReview: number;
}

const ReviewStatusBar = ({ score, count, totalReview }: Props) => {
  return (
    <ReviewBarStyled $total={(count / totalReview) * 100}>
      <span>{score}</span> <div /> <span>{count}</span>
    </ReviewBarStyled>
  );
};

export default ReviewStatusBar;

const ReviewBarStyled = styled.li<{ $total: number }>`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 12px;
  color: #b0b0b0;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  & > span {
    width: 8px;
  }

  & span:last-child {
    width: 20px;
  }

  & > div {
    position: relative;
    flex: 1;
    margin: 0 12px 0 6px;
    height: 8px;
    border-radius: 4px;
    max-width: 180px;
    background-color: #d9d9d9;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 8px;
      width: ${({ $total }) => $total}%;
      background-color: #ffc107;
      border-radius: 4px;
    }
  }
`;
