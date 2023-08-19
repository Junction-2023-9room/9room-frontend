import React from 'react';
import { styled } from 'styled-components';

const WasteDisposal = () => {
  return (
    <DisposalContainer>
      <h1>Disposal risk</h1>
      <img src={'/status-bar.svg'} alt="" />
      <p>
        Mercury-containing Waste: Common items like <br />
        thermometers and sphygmomanometers.
      </p>
    </DisposalContainer>
  );
};

export default WasteDisposal;

const DisposalContainer = styled.div`
  margin: 24px 20px 0;
  padding: 14px 14px 18px;
  border-radius: 12px;
  border: 1px solid #c1c1c1;

  & > h1 {
    margin: 0;
    padding-bottom: 25px;
    color: #323232;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
  }

  & > img {
    width: 100%;
    height: 75px;
    margin-bottom: 22px;
  }

  & > p {
    margin: 0;
    padding: 14px 36px 14px 12px;
    border-radius: 8px;
    background: #ebebeb;
    color: #222;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    overflow: hidden;
  }
`;
