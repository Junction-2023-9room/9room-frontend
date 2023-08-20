import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import Divider from '../../components/Divider';
import TitleHeader from '../../components/Header/TitleHeader';
import StaggerWrapper from '../../components/StaggerWrapper';
import useToast from '../../components/Toast/useToast';
import { COMPANY_LIST } from '../../constants/company';
import { defaultFadeInVariants } from '../../constants/motions';
import { WASTE_LIST_LABEL } from '../../constants/waste';
import { useScrollTop } from '../../libs/hooks/useScrollTop';
import CompanyItem from './CompanyItem';

const Index = () => {
  useScrollTop();

  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const wasteName = params.get('waste') ?? 'Mercury Sphygmomanometers';

  const { fireToast } = useToast();

  const onClick = () => {
    fireToast({
      content: 'Preparing...',
    });
  };

  return (
    <div>
      <TitleHeader />
      {/* <StaggerWrapper paragraphVariants={defaultFadeInVariants}> */}
      <motion.div
        variants={defaultFadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <TopContainer>
          <Heading>Recommended Companies</Heading>
          <RecommendCompany>
            <span>{WASTE_LIST_LABEL[wasteName]}</span>
            <div onClick={onClick}>
              <img src="/icons/drop-arrow.svg" alt="drop-arrow" />
            </div>
          </RecommendCompany>

          <TotalSection>
            <span>Total {COMPANY_LIST.length}</span>
            <div onClick={onClick}>
              <span>Default</span>
              <img src="/icons/down-arrow.svg" alt="down-arrow" />
            </div>
          </TotalSection>
        </TopContainer>
        <Divider />
      </motion.div>
      <List>
        <StaggerWrapper>
          {COMPANY_LIST.map((company) => (
            <CompanyItem key={company.id} {...company} />
          ))}
        </StaggerWrapper>
      </List>
      {/* </StaggerWrapper> */}
    </div>
  );
};

export default Index;

const List = styled.div`
  padding: 21px 20px;
`;

const TopContainer = styled.div`
  padding: 0 20px;
`;

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 52px;
  align-items: center;

  color: #666;
  font-size: 14px;
  font-weight: 400;

  img {
    width: 12px;
    height: 7px;
    position: relative;
    top: 1px;
  }

  & > div {
    font-weight: 500;
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
`;

const Heading = styled.h1`
  margin-top: 24px;
  margin-bottom: 20px;
  color: #323232;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
`;

const RecommendCompany = styled.div`
  border-radius: 9px;
  border: 1px solid #c1c1c1;
  background: #fff;
  height: 52px;
  padding: 0 18px;
  line-height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
