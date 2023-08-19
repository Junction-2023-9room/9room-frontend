import React from 'react';
import styled from 'styled-components';

import BottomButton from './BottomButton';
import WasteDescription from './WasteDescription';
import WasteDisposal from './WasteDisposal';
import WasteImage from './WasteImage';

const Index = () => {
  return (
    <Container>
      <WasteDescription />
      <WasteImage />
      <WasteDisposal />
      <BottomButton />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  position: relative;
  padding: 0 20px;
`;
