import { motion } from 'framer-motion';
import { styled } from 'styled-components';

import StaggerWrapper from '../../components/StaggerWrapper';
import { defaultFadeInVariants, stagger } from '../../constants/motions';
import { WASTE_LIST } from '../../constants/waste';
import WasteItem from './WasteItem';

const WasteList = () => {
  return (
    <motion.div
      variants={defaultFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ItemList>
        <StaggerWrapper staggerVariants={stagger(0.2)}>
          {WASTE_LIST.map((item) => (
            <WasteItem
              key={item.id}
              label={item.label}
              id={item.id}
              subItems={item.subItems}
            />
          ))}
        </StaggerWrapper>
      </ItemList>
    </motion.div>
  );
};

export default WasteList;

const ItemList = styled.div`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`;
