import { styled } from 'styled-components';

import Tooltip from '../../components/Tooltip';
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
      <InfoBox>
        <div>
          <div>
            <img src="/icons/telephone.svg" alt="telephone" />
            <span>Contact</span>
          </div>
          <div className="divider">|</div>
          <div>
            <img src="/icons/heart.svg" alt="heart" />
            <span>Save</span>
          </div>
          <div className="divider">|</div>
          <div>
            <img src="/icons/share-1.svg" alt="share" />
            <span>Share</span>
          </div>
        </div>
        <hr />
        <div>
          {data.cheaper ? (
            <Tooltip position="top" message={data.cheaper + ' cheaper than competitors'}>
              <strong>{data.price} ₩</strong>
            </Tooltip>
          ) : (
            <strong>{data.price} ₩</strong>
          )}

          <span>In special cases, prices may vary.</span>
        </div>
      </InfoBox>
    </Container>
  );
};

export default Info;

const Container = styled.div`
  padding: 20px 20px 34px;
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

const InfoBox = styled.div`
  border-radius: 12px;
  background: #efefef;

  & > div {
    height: 45px;
  }

  .divider {
    color: #7b7b7b;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 12px */
  }

  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    color: #7b7b7b;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 12px */

    & > div {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }

  hr {
    border: 1px solid #d8d8d8;
    width: calc(100% - 24px);
    margin: 0 auto;
  }

  div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    strong {
      color: #313131;
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%; /* 18px */
    }
    span {
      color: #666;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 12px */
    }
  }
`;
