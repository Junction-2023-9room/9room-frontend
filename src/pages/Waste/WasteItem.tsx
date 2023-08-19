import styled from 'styled-components';

import {
  CheckIcon,
  SmallCheckIcon,
  SmallNonCheckIcon,
} from '../../assets/icons/check-icon';
import { IMAGES_PATH } from '../../constants/waste';

interface ItemProps {
  label: string;
  id: string;
}

interface Props {
  label: string;
  id: string;
  onClick: (id: string) => void;
  selectItem: string | null;

  subItems?: ItemProps[];
}

const WasteItem = ({ label, id, onClick, selectItem, subItems }: Props) => {
  const isChecked = Boolean(
    selectItem === id || (selectItem && subItems && checkSubItem(selectItem, subItems)),
  );
  return (
    <div>
      <Item onClick={() => onClick(id)} isChecked={isChecked}>
        <div>
          <img src={IMAGES_PATH[id]} alt={id} />
          <span>{label}</span>
        </div>
        <CheckIcon fill={isChecked ? '#FFF' : '#BABABA'} />
      </Item>

      {isChecked && subItems && (
        <SubItemContainer>
          {subItems?.map((item) => (
            <SubItem
              isChecked={item.id === selectItem}
              key={item.id}
              onClick={() => onClick(item.id)}
            >
              <div>
                <img src={IMAGES_PATH[item.id]} alt={item.id} />
                <span>{item.label}</span>
              </div>
              {item.id === selectItem ? <SmallCheckIcon /> : <SmallNonCheckIcon />}
            </SubItem>
          ))}
        </SubItemContainer>
      )}
    </div>
  );
};
export default WasteItem;

const Item = styled.div<{
  isChecked: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: 0 14px;
  height: 63px;
  align-items: center;
  border-radius: 12px;

  font-weight: 700;
  color: ${(props) => (props.isChecked ? '#fff' : '#595959')};

  background-color: ${(props) => (props.isChecked ? '#4C35FF' : '#FFF')};
  border: 1px solid;
  border-color: ${(props) => (props.isChecked ? '#4C35FF' : '#C1C1C1')};

  & > div {
    align-items: center;
    display: flex;
    gap: 14px;
  }
`;

const SubItemContainer = styled.div`
  border-radius: 12px;
  background: #efefef;
  margin-top: 4px;
  padding: 8px;
`;

const SubItem = styled(Item)<{
  isChecked: boolean;
}>`
  background-color: ${(props) => (props.isChecked ? '#D9D9D9' : 'transparent')};
  padding: 6px 12px;
  height: 48px;
  color: #595959;
  border: none;
`;

const checkSubItem = (selectItem: string, subItem: ItemProps[]) => {
  let flag = false;
  subItem.forEach((item) => {
    if (item.id === selectItem) {
      flag = true;
    }
  });

  return flag;
};
