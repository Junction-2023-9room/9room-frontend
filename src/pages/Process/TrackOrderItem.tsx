import React from 'react';
import { styled } from 'styled-components';

interface Props {
  src: string;
  activeSrc: string;
  title: string;
  date: Date;
  active: boolean;
}

const TrackOrderItem = ({ src, title, date, activeSrc, active }: Props) => {
  return (
    <TrackOrderItemStyled $active={active}>
      <img src={active ? activeSrc : src} alt={title} />
      <div>
        <h2>{title}</h2>
        <div>09:02 | Aug 20</div>
      </div>
    </TrackOrderItemStyled>
  );
};

export default TrackOrderItem;

const TrackOrderItemStyled = styled.li<{ $active: boolean }>`
  cursor: pointer;
  display: flex;
  padding: 8px 12px 8px 8px;
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 6px;
  gap: 12px;

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
`;
