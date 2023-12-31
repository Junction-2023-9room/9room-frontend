import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';

import Divider from '../../components/Divider';
import Badge from '../../components/Header/Badge';
import { defaultFadeInVariants } from '../../constants/motions';
import WasteDescription from './WasteDescription';
import WasteDisposal from './WasteDisposal';

const WasteDetail = () => {
  return (
    <motion.div
      variants={defaultFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Badge type="warning" />
      <WasteDescription />
      <WasteImageList>
        <li>
          <img src={'/images/mercury/mercury-1.png'} alt="mercyry-1" />
        </li>
        <li>
          <img src={'/images/mercury/mercury-2.png'} alt="mercyry-2" />
        </li>
      </WasteImageList>
      <Divider />
      <WasteDisposal />
    </motion.div>
  );
};

export default WasteDetail;

const WasteImageList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 0 20px 0;
  padding: 0 20px;
  overflow-x: scroll;
  gap: 12px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
