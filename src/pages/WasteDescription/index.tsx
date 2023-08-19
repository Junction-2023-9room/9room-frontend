import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BottomButton from '../../components/BottomButton';
import Divider from '../../components/Divider';
import NavHeader from '../../components/Header/NavHeader';
import WasteDescription from './WasteDescription';
import WasteDisposal from './WasteDisposal';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const wasteName = location.pathname.split('/')[2];

  const handleOnClickMove = () => {
    navigate(`/company?waste=${wasteName}`);
  };

  return (
    <Container>
      <NavHeader title={wasteName} />
      <WarningBadge>
        <img src={'/icons/warning.svg'} alt="warning" /> <span>Caution</span>
      </WarningBadge>
      <WasteDescription />
      <WasteImageList>
        <li>
          <img src={'/images/mercury/mercury-1.png'} alt="mercyry-1" />
        </li>
        <li>
          <img src={'/images/mercury/mercury-2.png'} alt="mercyry-2" />
        </li>
      </WasteImageList>
      <Divider />
      <WasteDisposal />
      <BottomButton text={'View more'} handler={handleOnClickMove} />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  position: relative;
`;

const WarningBadge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 14px;
  left: 14px;
  margin-top: 27px;
  margin-left: 20px;
  padding: 6px 10px;
  width: fit-content;
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
`;

const WasteImageList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 0 20px 0;
  padding: 0 20px;
  overflow-x: scroll;
  gap: 12px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
