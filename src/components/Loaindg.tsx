import styled from 'styled-components';

export default function Loading() {
  return (
    <Container>
      <Wrapper>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Wrapper>
    </Container>
  );
}

export const SmallLoading = () => {
  return (
    <SmallWrapper>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SmallWrapper>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;

  div {
    position: absolute;

    width: 6px;
    height: 6px;

    background: #4c35ff;
    border-radius: 50%;

    animation: lds-default 1.2s linear infinite;
  }

  div:nth-child(1) {
    top: 37px;
    left: 66px;
    animation-delay: 0s;
  }

  div:nth-child(2) {
    top: 22px;
    left: 62px;
    animation-delay: -0.1s;
  }

  div:nth-child(3) {
    top: 11px;
    left: 52px;
    animation-delay: -0.2s;
  }

  div:nth-child(4) {
    top: 7px;
    left: 37px;
    animation-delay: -0.3s;
  }

  div:nth-child(5) {
    top: 11px;
    left: 22px;
    animation-delay: -0.4s;
  }

  div:nth-child(6) {
    top: 22px;
    left: 11px;
    animation-delay: -0.5s;
  }

  div:nth-child(7) {
    top: 37px;
    left: 7px;
    animation-delay: -0.6s;
  }

  div:nth-child(8) {
    top: 52px;
    left: 11px;
    animation-delay: -0.7s;
  }

  div:nth-child(9) {
    top: 62px;
    left: 22px;
    animation-delay: -0.8s;
  }

  div:nth-child(10) {
    top: 66px;
    left: 37px;
    animation-delay: -0.9s;
  }

  div:nth-child(11) {
    top: 62px;
    left: 52px;
    animation-delay: -1s;
  }

  div:nth-child(12) {
    top: 52px;
    left: 62px;
    animation-delay: -1.1s;
  }

  @keyframes lds-default {
    0%,
    20%,
    80%,
    100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.5);
    }
  }
`;

const SmallWrapper = styled(Wrapper)`
  width: 30px;
  height: 30px;
`;
