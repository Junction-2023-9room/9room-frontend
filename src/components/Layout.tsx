import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

import theme from '../styles/theme';

interface Props {
  title?: string;
}

function Layout({ children }: PropsWithChildren<Props>) {
  return <Container>{children}</Container>;
}

export default Layout;

const Container = styled.main`
  max-width: ${theme.maxWidth};
  min-height: 100vh;
  margin: 0 auto;
`;
