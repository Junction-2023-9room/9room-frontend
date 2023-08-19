import { styled } from 'styled-components';

import { WASTE_LIST } from '../../constants/waste';
import WasteItem from './WasteItem';

const WasteList = () => {
  return (
    <div>
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
    </div>
  );
};

export default WasteList;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
