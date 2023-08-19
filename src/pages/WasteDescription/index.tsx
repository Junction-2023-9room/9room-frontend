import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BottomButton from '../../components/BottomButton';
import NavHeader from '../../components/Header/NavHeader';
import WasteDetail from '../WasteDescription/WasteDetail';
import UpcyclingDetail from './UpcyclingDetail';

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
      {wasteName === 'lead-acid' ? <UpcyclingDetail /> : <WasteDetail />}
      <BottomButton text={'View more'} handler={handleOnClickMove} />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  position: relative;
`;
