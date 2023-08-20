import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import NavHeader from '../../components/Header/NavHeader';
import Loading from '../../components/Loaindg';
import StaggerWrapper from '../../components/StaggerWrapper';
import { COMPANY } from '../../constants/company';
import useLoadingDelay from '../../libs/hooks/useLoadingDelay';
import { useScrollTop } from '../../libs/hooks/useScrollTop';
import ProgressBox from './ProgressBox';
import TrackOrder from './TrackOrder';

const Index = () => {
  useScrollTop();

  const [stage, setStage] = useState(0);
  const location = useLocation();

  const waste = location.state.waste ?? 'Mercury-containing-Waste';
  const companyName = location.state.companyName ?? 'jaka';

  const data = COMPANY[companyName];

  const isLoading = useLoadingDelay();

  useEffect(() => {
    if (isLoading) return;
    const timer1 = setTimeout(() => {
      setStage(1);
    }, 3000);
    const timer2 = setTimeout(() => {
      setStage(2);
    }, 5000);
    const timer3 = setTimeout(() => {
      setStage(3);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isLoading]);

  return (
    <>
      <NavHeader title="Progress" />
      <Container>
        <Heading2>Progress Status</Heading2>
        {isLoading ? (
          <Loading />
        ) : (
          <StaggerWrapper>
            <Heading1>
              <div>
                <span>Your</span>
                <span>Disposal</span>
                <span>Journey</span>
              </div>
              <div>
                <span>with</span> {<img src={data.nameImg} alt={data.name} />}{' '}
                <span>EcoDisposal</span>
              </div>
            </Heading1>
            <ProgressBox
              stage={stage}
              waste={waste}
              date={new Date('2021-08-20').getTime()}
            />
            <TrackOrder stage={stage} />
          </StaggerWrapper>
        )}
      </Container>
    </>
  );
};

export default Index;

const Container = styled.div`
  padding: 20px;
  background: #f5f5f4;
  min-height: 100vh;
`;

const Heading2 = styled.h2`
  padding-top: 14px;
  padding-bottom: 14px;

  color: #4c35ff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 18px */
  margin: 0;
`;

const Heading1 = styled.h1`
  color: #101010;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
  line-height: 34px;

  margin-bottom: 72px;

  & > div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  img {
    height: 28px;
  }
`;
