import { styled } from 'styled-components';

import TitleHeader from '../../components/Header/TitleHeader';
import { Company, COMPANY_LIST } from '../../constants/company';

const Index = () => {
  return (
    <div>
      <TitleHeader />

      <List>
        {COMPANY_LIST.map((company) => (
          <CompanyItem key={company.name} {...company} />
        ))}
      </List>
    </div>
  );
};

export default Index;

const List = styled.div`
  padding: 21px 20px;
`;

const CompanyItem = (company: Company) => {
  return (
    <ItemContainer>
      <ItemImageContainer>
        <img src={company.img} alt={company.name} />
        <div>{company.cheaper} cheaper</div>
      </ItemImageContainer>
      <div>
        <ItemNameContainer>
          <img src={company.nameImg} alt={company.name} />
        </ItemNameContainer>
        <CompanyInfoContainer>
          <div>
            <img src="/icons/star-1.svg" alt="star" />
            <span>{company.rating}</span>
          </div>
          <div>
            <img src="/icons/location.svg" alt="location" />
            <span>{company.location}</span>
          </div>
          <div>
            <img src="/icons/time.svg" alt="time" />
            <span>{company.time}</span>
          </div>
        </CompanyInfoContainer>
        <ItemDesc>
          <div>{company.desc}</div>
        </ItemDesc>
      </div>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: grid;
  height: 108px;
  grid-template-columns: 90px 1fr;
  gap: 12px;
  margin-bottom: 20.88px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: space-between;
  }
`;

const ItemImageContainer = styled.div`
  width: 90px;
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  background: #444;

  & > div {
    position: absolute;
    width: 100%;
    bottom: 0;

    background: #4c35ff;
    height: 26.842px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    font-size: 10px;
    font-weight: 700;
  }
`;

const ItemNameContainer = styled.div`
  height: 23px;
`;

const CompanyInfoContainer = styled.section`
  grid-template-columns: 1fr 1.5fr 1.5fr;
  display: grid;

  & > div {
    display: flex;
    color: #666;
    font-size: 12px;
    font-weight: 400;
    gap: 4px;
    align-items: center;

    &:nth-child(1) {
      color: #313131;
      font-size: 14px;
      font-weight: 700;
      img {
        height: 12px;
      }
    }

    &:nth-child(2) {
      img {
        height: 10px;
      }
    }

    &:nth-child(3) {
      img {
        height: 10px;
      }
    }
  }
`;

const ItemDesc = styled.section`
  border-radius: 4px;
  background: #efefef;
  padding: 10px 8px;

  color: #a1a1a1;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 87%; /* 10.44px */

  width: 100%;

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
