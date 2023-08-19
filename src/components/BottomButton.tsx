import React from 'react';
import { styled } from 'styled-components';

interface Props {
  text: string;
  handler: () => void;
}

const BottomButton = ({ text, handler }: Props) => {
  return (
    <BottomContainer>
      <button onClick={handler}>{text}</button>
    </BottomContainer>
  );
};

export default BottomButton;

const BottomContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
  bottom: 20px;
  height: 52px;
  width: 100%;
  border: none;

  & > button {
    cursor: pointer;
    max-width: calc(390px - 40px);
    width: calc(100% - 40px);
    padding: 0 20px;
    border: none;
    border-radius: 8px;
    background-color: #4c35ff;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.36);
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &:hover {
      background-color: #3e26f6;
    }
  }
`;
