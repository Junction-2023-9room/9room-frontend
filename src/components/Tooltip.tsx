import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';

interface Props {
  message: string;
  position: 'top' | 'bottom';
}

const Tooltip = ({ children, message, position }: PropsWithChildren<Props>) => {
  const [show, setShow] = useState(true);

  return (
    <Container>
      {children}
      {show && (
        <Text position={position}>
          <div>
            <p>{message}</p>
          </div>
          <Arrow position={position}>
            <img src="/icons/tooltip-arrow.svg" alt="arrow" />
          </Arrow>
          <div onClick={() => setShow(false)}>
            <img src="/icons/x-icon.svg" alt="x button" />
          </div>
        </Text>
      )}
    </Container>
  );
};

export default Tooltip;

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Text = styled.span<{
  position: 'top' | 'bottom';
}>`
  visibility: hidden;
  background-color: #4c35ff;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 10px;
  position: absolute;
  z-index: 1;

  display: flex;
  gap: 12px;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s;
  margin-left: -6px;
  visibility: visible;
  opacity: 1;

  display: flex;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }

  ${({ position }) => {
    if (position === 'top') {
      return `
        top: 125%;
        bottom: auto;
      `;
    }
    return `
      bottom: 125%;
      top: auto;
    `;
  }}
`;

export const Arrow = styled.div<{
  position: 'top' | 'bottom';
}>`
  position: absolute;
  border-width: 5px;
  left: 10px;
  top: -10px;
  z-index: 0;

  ${({ position }) => {
    if (position === 'top') {
      return `
      `;
    }
  }}
`;
