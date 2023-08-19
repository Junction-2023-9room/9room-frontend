import { styled } from 'styled-components';

const WasteDescription = () => {
  return (
    <DescriptionStyled>
      Never dispose of it <br /> with regular household waste!
    </DescriptionStyled>
  );
};

const DescriptionStyled = styled.p`
  margin: 0;
  margin-top: 32px;
  color: #101010;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

export default WasteDescription;
