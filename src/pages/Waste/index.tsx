import styled from 'styled-components';

import TitleHeader from '../../components/Header/TitleHeader';
import WasteList from './WasteList';

const Index = () => {
  return (
    <div>
      <TitleHeader />
      <Container>
        <Heading>
          Choose your <br />
          <strong>Generous</strong> waste!
        </Heading>
        <Desc>Ensure a safe and responsible disposal</Desc>
        <WasteList />
      </Container>
    </div>
  );
};

export default Index;

const Container = styled.div`
  padding: 0 20px;
`;

const Heading = styled.h2`
  margin-top: 32px;
  margin-bottom: 12px;

  color: #101010;
  font-size: 28px;
  font-weight: 700;

  & > strong {
    color: #4c35ff;
  }
`;

const Desc = styled.p`
  margin-bottom: 72px;

  color: #666;

  /* Paragraph/Body4 */
  font-size: 14px;
  font-weight: 500;
  line-height: 100%; /* 14px */
`;
