import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import theme from '../styles/theme';

function Layout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default Layout;

const Container = styled.main`
  max-width: ${theme.maxWidth};
  min-height: 100vh;
  margin: 0 auto;

  background-color: #fff;
`;
