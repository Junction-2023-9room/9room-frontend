import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

interface Props {
  waste: string;
}

const BottomButton = ({ waste }: Props) => {
  const navigate = useNavigate();

  const handleOnClickMove = () => {
    navigate(`/company?waste=${waste}`);
  };

  return (
    <BottomContainer>
      <button onClick={handleOnClickMove}>자세히 보러가기</button>
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
    max-width: 475px;
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
