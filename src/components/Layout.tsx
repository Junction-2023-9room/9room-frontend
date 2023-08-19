import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import theme from '../styles/theme';
import Header from './Header/Header';

function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default Layout;

const Container = styled.main`
  max-width: ${theme.maxWidth};
  min-height: 100vh;
  margin: 0 auto;
`;
