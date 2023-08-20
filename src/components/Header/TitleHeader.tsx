import styled from 'styled-components';

import useToast from '../Toast/useToast';

const TitleHeader = () => {
  const { fireToast } = useToast();

  const onClick = () => {
    fireToast({
      content: 'In ready.',
    });
  };
  return (
    <TitleHeaderContainer>
      <img src={'/logo.svg'} alt="autoWaste" />
      <div onClick={onClick}>
        <img src={'/icons/three-dots.svg'} alt="three-dots" />
      </div>
    </TitleHeaderContainer>
  );
};

export default TitleHeader;

const TitleHeaderContainer = styled.div`
  display: flex;
  height: 52px;
  justify-content: space-between;
  align-items: center;
  padding: 0 19px 0 15px;

  & > img {
    cursor: pointer;
  }
`;
