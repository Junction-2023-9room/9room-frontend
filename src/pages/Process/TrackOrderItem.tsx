import React, { useState } from 'react';
import { styled } from 'styled-components';

import { DownArrowIcon, UpArrowIcon } from '../../assets/icons/arrow-icon';

interface Props {
  src: string;
  activeSrc: string;
  title: string;
  date: Date;
  active: boolean;

  detail?: {
    status: string;
    desc: string;
  };
}

const TrackOrderItem = ({ src, title, date, activeSrc, active, detail }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <TrackOrderItemStyled
      $active={active}
      onClick={() => detail && setIsOpen((prev) => !prev)}
    >
      <div>
        <img src={active ? activeSrc : src} alt={title} />
        <div>
          <h2>{title}</h2>
          <div>09:02 | Aug 20</div>
        </div>
      </div>
      {detail && <div>{isOpen ? <UpArrowIcon /> : <DownArrowIcon />}</div>}{' '}
      {detail && isOpen && (
        <Desc>
          <h2>
            Current Status
            <div className="tag">
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#02DA3C" />
              </svg>
              {detail.status}
            </div>
          </h2>
          <hr />
          <div>{detail.desc}</div>
        </Desc>
      )}
    </TrackOrderItemStyled>
  );
};

export default TrackOrderItem;

const Desc = styled.article`
  position: absolute;
  top: calc(100% + 4px);
  border-radius: 6px;
  border: 1px solid #c1c1c1;
  background: #fff;
  z-index: 100;
  padding: 14px;
  gap: 14px;

  .tag {
    line-height: 18px;
    border-radius: 9px;
    background: #ebebeb;
    color: #000;
    font-size: 10px;
    font-weight: 400;
    width: fit-content;
    padding: 0 7px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  h2 {
    color: #000;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 12px */
    display: flex;
    gap: 12px;
    margin: 0;
    align-items: center;
  }

  hr {
    background-color: #c1c1c1;
    border: none;
    height: 1px;
  }
  div {
    color: #434343;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 12px */
  }
`;
const TrackOrderItemStyled = styled.li<{ $active: boolean }>`
  cursor: pointer;
  display: flex;
  padding: 8px 12px 8px 8px;
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 6px;
  justify-content: space-between;
  position: relative;

  & > div {
    display: flex;
    gap: 12px;
    align-items: center;

    & > img {
      width: 34px;
      height: 34px;
      border-radius: 50%;
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4.5px;

      & > h2 {
        margin: 0;
        padding: 0;
        color: ${({ $active }) => ($active ? '#000' : '#989898')};
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
      }
      & > div {
        color: #b5b5b5;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
      }
    }
  }
`;
