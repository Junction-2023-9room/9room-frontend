import { motion } from 'framer-motion';
import { styled } from 'styled-components';

import { defaultFadeInVariants } from '../../constants/motions';
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
        {WASTE_LIST.map((item) => (
          <WasteItem
            key={item.id}
            label={item.label}
            id={item.id}
            subItems={item.subItems}
          />
        ))}
      </ItemList>
    </motion.div>
  );
};

export default WasteList;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
