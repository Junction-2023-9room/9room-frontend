import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router';
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
  subItems?: ItemProps[];
}

const WasteItem = ({ label, id, subItems }: Props) => {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const navigate = useNavigate();

  const movePage = (id: string) => {
    navigate('/waste/' + id);
  };

  return (
    <div>
      <Item
        onClick={() => {
          if (subItems) {
            setIsSubOpen((prev) => !prev);
            return;
          }
          movePage(id);
        }}
        className={isSubOpen ? 'check' : 'non-check'}
        isSubOpen={isSubOpen}
      >
        <div>
          <img src={IMAGES_PATH[id]} alt={id} />
          <span>{label}</span>
        </div>
        <div className="non-check-icon">
          <CheckIcon fill="#BABABA" />
        </div>
        <div className="check-icon">
          <CheckIcon fill="#fff" />
        </div>
      </Item>

      {isSubOpen && subItems && (
        <SubItemContainer
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
        >
          {subItems?.map((item) => (
            <SubItem key={item.id} onClick={() => movePage(item.id)}>
              <div>
                <img src={IMAGES_PATH[item.id]} alt={item.id} />
                <span>{item.label}</span>
              </div>

              <div className="non-check-icon">
                <SmallNonCheckIcon />
              </div>
              <div className="check-icon">
                <SmallCheckIcon />
              </div>
            </SubItem>
          ))}
        </SubItemContainer>
      )}
    </div>
  );
};
export default WasteItem;

const Item = styled.div<{
  isSubOpen?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: 0 14px;
  height: 63px;
  align-items: center;
  border-radius: 12px;

  font-weight: 700;

  color: #595959;
  background-color: #fff;
  border: 1px solid #c1c1c1;

  .check-icon {
    display: none;
  }

  &:hover {
    color: #fff;
    background-color: #4c35ff;
    border: 1px solid #4c35ff;

    .non-check-icon {
      display: none;
    }
    .check-icon {
      display: flex;
    }
  }

  ${(props) =>
    props.isSubOpen &&
    `
  color: #fff;
    background-color: #4c35ff;
    border: 1px solid #4c35ff;

    .non-check-icon {
      display: none;
    }
    .check-icon {
      display: flex;
    }
  `}

  .check {
    color: #fff;
    background-color: #4c35ff;
    border: 1px solid #4c35ff;
  }

  & > div {
    align-items: center;
    display: flex;
    gap: 14px;
  }
`;

const SubItemContainer = styled(motion.div)`
  border-radius: 12px;
  background: #efefef;
  margin-top: 4px;
  padding: 8px;
`;

const SubItem = styled(Item)`
  padding: 6px 12px;
  height: 48px;
  color: #595959;
  border: none;
  background-color: transparent;

  .check-icon {
    display: none;
  }

  &:hover {
    border: none;
    color: #595959;
    background-color: #d9d9d9;
    .non-check-icon {
      display: none;
    }
    .check-icon {
      display: flex;
    }
  }
`;
