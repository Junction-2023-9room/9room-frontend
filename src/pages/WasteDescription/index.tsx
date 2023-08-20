import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BottomButton from '../../components/BottomButton';
import NavHeader from '../../components/Header/NavHeader';
import { LOCAL_STORAGE_KEY } from '../../constants/storage';
import { WASTE_LIST_LABEL } from '../../constants/waste';
import { useScrollTop } from '../../libs/hooks/useScrollTop';
import WasteDetail from '../WasteDescription/WasteDetail';
import Landing from './Landing';
import UpcyclingDetail from './UpcyclingDetail';

const PATH_NAME = ['lead-acid', 'mercury-thermo'];

const Index = () => {
  useScrollTop();

  const navigate = useNavigate();
  const location = useLocation();
  const wasteName = location.pathname.split('/')[2];

  const handleOnClickMove = () => {
    navigate(`/company?waste=${wasteName}`);
    localStorage.setItem(LOCAL_STORAGE_KEY.waste, wasteName);
  };

  return (
    <Container>
      <NavHeader title={WASTE_LIST_LABEL[wasteName]} />
      {PATH_NAME.includes(wasteName) ? (
        <>
          {wasteName === 'lead-acid' ? <UpcyclingDetail /> : <WasteDetail />}
          <BottomButton text={'View more'} handler={handleOnClickMove} />
        </>
      ) : (
        <Landing />
      )}
    </Container>
  );
};

export default Index;

const Container = styled.div`
  position: relative;
`;
