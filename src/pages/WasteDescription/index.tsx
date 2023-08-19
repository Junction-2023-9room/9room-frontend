import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import BottomButton from './BottomButton';
import WasteDescription from './WasteDescription';
import WasteDisposal from './WasteDisposal';
import WasteImage from './WasteImage';

const Index = () => {
  const location = useLocation();
  const wasteName = location.pathname.split('/')[2];

  useEffect(() => {
    // fetch API
    //
  }, []);

  return (
    <Container>
      <WasteDescription />
      <WasteImage />
      <WasteDisposal />
      <BottomButton waste={wasteName} />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  position: relative;
  padding: 0 20px;
`;
