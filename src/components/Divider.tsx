import React from 'react';
import { styled } from 'styled-components';

const Divider = () => {
  return <DividerStyled />;
};

export default Divider;

const DividerStyled = styled.hr`
  background: #f4f4f4;
  height: 12px;
  border: none;

  width: 100%;
`;
