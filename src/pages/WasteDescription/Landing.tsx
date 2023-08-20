import React from 'react';
import { styled } from 'styled-components';

const Landing = () => {
  return (
    <LandingContainer>
      <div>
        <img src="/images/landing.svg" alt="landing img" />
        <p>Coming soon</p>
      </div>
    </LandingContainer>
  );
};

export default Landing;

const LandingContainer = styled.div`
  position: relative;

  & > div {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 10px;

    & > img {
      width: fit-content;
    }

    & > p {
      color: #a1a1a1;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%;
    }
  }
`;
