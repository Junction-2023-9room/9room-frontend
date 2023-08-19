import React, { useState } from 'react';
import { styled } from 'styled-components';

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
        <WasteItem
          label={'Pesticides'}
          id={'1'}
          onClick={onItemClick}
          selectItem={selectItem}
        />
        <WasteItem
          label={'Pesticides'}
          id={'11'}
          onClick={onItemClick}
          selectItem={selectItem}
          subItems={[
            {
              label: 'aa',
              id: '2',
            },
            {
              label: '3333',
              id: '4',
            },
          ]}
        />
        <WasteItem
          label={'Pesticides'}
          id={'41'}
          onClick={onItemClick}
          selectItem={selectItem}
        />
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
