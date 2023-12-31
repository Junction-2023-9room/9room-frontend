import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { defaultFadeInVariants } from '../../constants/motions';
import DetailTab from './DetailTab';
import ReviewTab from './ReviewTab';

const tabList: string[] = ['Detail', 'Information', 'Review'];

interface Props {
  companyName: string;
}

const CompanyDetailTab = ({ companyName }: Props) => {
  const [activeTab, setActiveTab] = useState('Detail');

  return (
    <CompanyDetailTabContainer>
      <TabContainer>
        {tabList.map((item) => (
          <TabItem
            key={item}
            $active={activeTab === item}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </TabItem>
        ))}
      </TabContainer>
      {companyName === 'jaka' && (
        <div>
          {activeTab === 'Detail' && (
            <motion.div
              variants={defaultFadeInVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <DetailTab />
            </motion.div>
          )}
          {activeTab === 'Information' && <></>}
          {activeTab === 'Review' && (
            <motion.div
              variants={defaultFadeInVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ReviewTab />
            </motion.div>
          )}
        </div>
      )}
    </CompanyDetailTabContainer>
  );
};

export default CompanyDetailTab;

const CompanyDetailTabContainer = styled.div``;

const TabContainer = styled.ul`
  list-style: none;
  margin: 0;
  display: grid;
  padding: 12px 20px 0;
  height: 40px;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  border-bottom: 1px solid #c6c6c6;
`;

const TabItem = styled.li<{ $active: boolean }>`
  cursor: pointer;
  position: relative;
  color: #6c6c6c;

  ${({ $active }) =>
    $active &&
    css`
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;

      &::after {
        content: '';
        position: absolute;
        height: 4px;
        width: 100%;
        bottom: -2.5px;
        left: 0;
        background-color: #4c35ff;
        border-radius: 2px;
      }
    `}
`;
