import React from 'react';
import { styled } from 'styled-components';

import Rating from './Rating';
import ReviewScoreBox from './ReviewScoreBox';

const ReviewTab = () => {
  return (
    <ReviewTabContainer>
      <RatingContainer>
        <RatingScoreStyled>
          <span>4.8</span>
          <ul>
            {new Array(5).fill('').map((_, idx) => (
              <li key={idx}>
                <Rating active={idx !== 4} />
              </li>
            ))}
          </ul>
        </RatingScoreStyled>
        <ReviewScoreBox totalReview={400} />
      </RatingContainer>
      <Divider />

      <ReviewDetailBox>
        <ReviewDetailItem>
          <DetailHeader>
            <img src={'/images/review/review-user.png'} alt="" />
            <div>
              <h1>Hyoja elementry school</h1>
              <div>
                <ul>
                  {new Array(5).fill('').map((_, idx) => (
                    <li key={idx}>
                      <Rating active={true} />
                    </li>
                  ))}
                </ul>
                <span>2023.08.19</span>
              </div>
            </div>
          </DetailHeader>
          <p>
            {`I recently used Jaka EcoDisposal for my mercury-containing waste, and I must
            say I'm thoroughly impressed. Their use of cobots made the disposal process
            not only efficient but also incredibly safe. It's evident that they prioritize
            both the environment and customer satisfaction.`}
          </p>
          <ReviewImageList>
            <li>
              <img src={'/images/review/review-1.png'} alt="review-1" />
            </li>
            <li>
              <img src={'/images/review/review-2.png'} alt="review-2" />
            </li>
            <li>
              <img src={'/images/review/review-3.png'} alt="review-3" />
            </li>
          </ReviewImageList>
        </ReviewDetailItem>
        <ReviewDetailItem>
          <DetailHeader>
            <img src={'/images/review/review-user.png'} alt="" />
            <div>
              <h1>Hyoja elementry school</h1>
              <div>
                <ul>
                  {new Array(5).fill('').map((_, idx) => (
                    <li key={idx}>
                      <Rating active={true} />
                    </li>
                  ))}
                </ul>
                <span>2023.08.19</span>
              </div>
            </div>
          </DetailHeader>
          <p>
            {`I recently used Jaka EcoDisposal for my mercury-containing waste, and I must
            say I'm thoroughly impressed. Their use of cobots made the disposal process
            not only efficient but also incredibly safe. It's evident that they prioritize
            both the environment and customer satisfaction.`}
          </p>
          <ReviewImageList>
            <li>
              <img src={'/images/review/review-1.png'} alt="review-1" />
            </li>
            <li>
              <img src={'/images/review/review-2.png'} alt="review-2" />
            </li>
            <li>
              <img src={'/images/review/review-3.png'} alt="review-3" />
            </li>
          </ReviewImageList>
        </ReviewDetailItem>
      </ReviewDetailBox>
    </ReviewTabContainer>
  );
};

export default ReviewTab;

const ReviewTabContainer = styled.article``;

const RatingContainer = styled.div`
  display: grid;
  grid-template-columns: calc(151px - 16px) 1fr;
  height: 138px;
`;

const RatingScoreStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    color: #101010;
    font-size: 40.157px;
    font-style: normal;
    font-weight: 400;
  }

  & > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 5px;
  }
`;

const Divider = styled.div`
  height: 12px;
  background-color: #f4f4f4;
`;

const ReviewDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ReviewDetailItem = styled.div`
  padding: 23px 0 0 20px;

  & > p {
    margin-top: 20px;
    padding-right: 28px;
    color: #666;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 12px */
  }

  & > div:last-child {
    height: 114px;
  }
`;

const ReviewImageList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0 20px 0 0;
  gap: 8px;
  overflow-x: scroll;

  & > li {
    & > img {
      width: 160px;
      height: 114px;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DetailHeader = styled.div`
  display: flex;
  gap: 12px;

  & > img {
    height: 32px;
    border-radius: 4px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 6px;

    & > h1 {
      margin: 0;
      padding: 0;
      color: #323232;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%;
    }

    & > div {
      display: flex;
      justify-content: start;
      align-items: center;
      height: 10px;
      gap: 12px;

      & > ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        gap: 3px;

        & > img {
          width: 10px;
          height: 10px;
        }
      }

      & > span {
        color: #b0b0b0;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
      }
    }

    color: #323232;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 16px */
  }
`;
