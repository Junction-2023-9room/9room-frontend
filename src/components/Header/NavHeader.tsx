import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  title?: string;
}

const NavHeader = ({ title }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <NavHeaderContainer>
      <button onClick={handleOnClick}>
        <img src={'/icons/back-arrow.svg'} alt="backk-arrow" />
      </button>
      <h1>{title}</h1>
    </NavHeaderContainer>
  );
};

export default NavHeader;

const NavHeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;

  & > button {
    cursor: pointer;
    position: absolute;
    left: 20px;
    top: 50%;
    height: 100%;
    background: none;
    border: none;
    transform: translateY(-50%);

    & > img {
      display: flex;
      align-items: center;
      width: 18px;
      height: 18px;
    }
  }

  & > h1 {
    color: #222;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
`;
