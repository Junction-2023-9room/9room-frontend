import React, { useState } from 'react';
import { styled } from 'styled-components';

import { WASTE_LIST } from '../../constants/waste';
import WasteItem from './WasteItem';

const Index = () => {
  const [selectItem, setSelectItem] = useState<string | null>(null);

  const onItemClick = (id: string) => {
    if (id === selectItem) {
      setSelectItem(null);
      return;
    }
    setSelectItem(id);
  };

  return (
    <div>
      <ItemList>
        {WASTE_LIST.map((item) => (
          <WasteItem
            key={item.id}
            label={item.label}
            id={item.id}
            subItems={item.subItems}
            onClick={onItemClick}
            selectItem={selectItem}
          />
        ))}
      </ItemList>
    </div>
  );
};

export default Index;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
