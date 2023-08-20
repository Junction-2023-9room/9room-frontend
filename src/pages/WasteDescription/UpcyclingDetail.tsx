import React from 'react';
import { styled } from 'styled-components';

import Divider from '../../components/Divider';
import Badge from '../../components/Header/Badge';
import Rating from '../CompanyDetail/Rating';

const UpcyclingDetail = () => {
  return (
    <>
      <Badge type="upcycling" />
      <UpcyclingDescription>
        <h1>
          Save money with <br /> eco-friendly upcycling!
        </h1>
        <DescriptionInfo>
          <p>
            Reduce processing costs by <strong>15%</strong>
          </p>
          <p>compared to traditional methods.</p>
        </DescriptionInfo>
      </UpcyclingDescription>
      <Divider />
      <UpcyclingInfo>
        <h2>Customer review</h2>
        <UpcyclingReviewList>
          <UpcyclingReview>
            <img src={'/images/upcycling/upcycling-user-1.png'} alt={''} />
            <div>
              <div>
                <span>Alex</span>
                <Rating active={true} /> 4.5
              </div>
              <p>
                {`It's nice to know that we're helping the environment and saving money.`}
              </p>
            </div>
          </UpcyclingReview>
          <UpcyclingReview>
            <img src={'/images/upcycling/upcycling-user-2.png'} alt={''} />
            <div>
              <div>
                <span>Ann</span>
                <Rating active={true} /> 4.8
              </div>
              <p>
                {`It's nice to know that it's upcycled, 
as I might not have noticed that.`}
              </p>
            </div>
          </UpcyclingReview>
        </UpcyclingReviewList>
      </UpcyclingInfo>
      <ImageWrapper>
        <img src={'/upcycling.png'} alt="upcycling" />
      </ImageWrapper>
    </>
  );
};

export default UpcyclingDetail;

const UpcyclingDescription = styled.div`
  padding: 0 20px;

  & > h1 {
    color: #101010;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }
`;

const DescriptionInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  margin-bottom: 28px;
  color: #666;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  gap: 6px;

  & > p {
    &:first-child {
      font-weight: 700;
    }

    & > strong {
      color: #4c35ff;
      position: relative;
      top: 1px;
    }
  }
`;

const UpcyclingInfo = styled.div`
  padding: 0 20px;
  & > h2 {
    color: #323232;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }
`;

const UpcyclingReviewList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 0 20px 0;
  padding: 0;
  overflow-x: scroll;
  gap: 12px;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UpcyclingReview = styled.li`
  display: flex;
  padding: 14px 24px 13px 14px;
  width: 292px;
  max-height: 75px;
  min-width: 292px;
  border-radius: 8px;
  border: 1px solid #c1c1c1;
  gap: 13px;

  & > img {
    width: 48px;
    height: 48px;
  }

  & > div {
    & > div {
      display: flex;
      align-items: center;
      justify-content: start;
      color: #313131;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%;
      gap: 4px;
      margin-bottom: 4px;

      & > span {
        position: relative;
        margin-right: 20px;

        color: #222;

        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 140%;
          height: 14px;
          width: 2px;
          background-color: #c1c1c1;
        }
      }
    }

    & > p {
      display: inline-block;
      width: 100%;
      color: #222;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;

      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
`;
