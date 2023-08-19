import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BottomButton from '../../components/BottomButton';
import NavHeader from '../../components/Header/NavHeader';
import WasteDescription from './WasteDescription';
import WasteDisposal from './WasteDisposal';
import WasteImage from './WasteImage';

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
      <WasteDescription />
      <WasteImage />
      <WasteDisposal />
      <BottomButton text={'View more'} handler={handleOnClickMove} />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  position: relative;
  padding: 0 20px;
`;
