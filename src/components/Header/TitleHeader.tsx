import styled from 'styled-components';

const TitleHeader = () => {
  return (
    <TitleHeaderContainer>
      <img src={'/logo.svg'} alt="autoWaste" />
      <img src={'/icons/three-dots.svg'} alt="three-dots" />
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
