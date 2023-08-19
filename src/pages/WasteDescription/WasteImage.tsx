import React from 'react';
import { styled } from 'styled-components';

const WasteImage = () => {
  return (
    <ImageContainer>
      <span>
        <img src={'/icons/warning.svg'} alt="warning" /> <span>Caution</span>
      </span>
      <p>img 넣을예정</p>
    </ImageContainer>
  );
};

export default WasteImage;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 38px;
  height: 150px;
  border-radius: 12px;
  background: #f4f4f4;

  & > p {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    color: rgba(0, 0, 0, 0.4);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    transform: translate(-50%, -50%);
  }

  & > span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 14px;
    left: 14px;
    padding: 6px 10px;
    border-radius: 6px;
    background-color: #ffc3c3;
    gap: 8px;

    & > span {
      color: #ff3737;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 50%;
    }
  }
`;
