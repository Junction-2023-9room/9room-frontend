import { styled } from 'styled-components';

import { COMPANY } from '../../constants/company';

const Info = ({ companyName }: { companyName: string }) => {
  const data = COMPANY[companyName];
  return (
    <Container>
      <ImageContainer>
        {data.images.map((image, index) => {
          return <img key={index} src={image} alt="company" />;
        })}
      </ImageContainer>
      <div>
        <MainLogoContainer>
          <img src={data.nameImg} alt="logo" />
        </MainLogoContainer>
      </div>
      <DetailInfoContainer>
        <div className="rating">
          <img src="/icons/star-1.svg" alt="star" />
          <span>
            <strong>{data.rating}</strong> (
            {data.reviewCount >= 100 ? '100+' : data.reviewCount})
          </span>
        </div>
        <div>
          <img src="/icons/location.svg" alt="location" />
          <span>{data.location}</span>
        </div>
        <div>
          <img src="/icons/time.svg" alt="time" />
          <span>{data.time}</span>
        </div>
      </DetailInfoContainer>
    </Container>
  );
};

export default Info;

const Container = styled.div`
  padding: 20px 34px;
`;

const ImageContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 14px;

  & > img {
    flex-shrink: 0;
    width: 283px;
    height: 170px;
    border-radius: 12px;
    object-fit: cover;
  }
`;

const MainLogoContainer = styled.div`
  margin: auto;
  margin-top: 20px;
  width: fit-content;

  img {
    height: 54px;
  }
`;

const DetailInfoContainer = styled.div`
  margin: 14px auto;
  display: flex;
  justify-content: center;
  gap: 22px;

  color: #666;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;

  & > div {
    display: flex;
    align-items: center;
    gap: 4px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .rating {
    color: #a8a8a8;
    font-size: 14px;
    font-weight: 400;

    strong {
      color: #313131;
      font-weight: 700;
    }
  }
`;
