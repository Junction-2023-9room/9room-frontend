import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import NavHeader from './NavHeader';
import TitleHeader from './TitleHeader';

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      {location.pathname === '/' || location.pathname === '/waste' ? (
        <TitleHeader />
      ) : (
        <NavHeader title={'Mercury Thermometers'} />
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  height: 52px;
`;
