import React from 'react';
import { styled } from 'styled-components';

import TrackOrderItem from './TrackOrderItem';

const OrderData = [
  {
    title: 'booked',
    src: '/images/process/booked-done.svg',
    activeSrc: '/images/process/booked.svg',
    date: new Date(),
    detail: {
      status: 'Booked',
      desc: `The waste has been filed with our company now!
      Our dedicated team will dispose of it quickly. Don't worry, you're already
       The right choice!`,
    },
  },
  {
    title: 'In Transit',
    src: '/images/process/in-transit-done.svg',
    activeSrc: '/images/process/in-transit.svg',
    date: new Date(),

    detail: {
      status: 'On the Move',
      desc: `Your waste is currently on its way to our 
      facility. Our dedicated team ensures a swift
       and safe transit. Rest assured, you've made
       the right choice!`,
    },
  },
  {
    title: 'Awaiting Processing',
    src: '/images/process/awaiting-process-done.svg',
    activeSrc: '/images/process/awaiting-process.svg',
    date: new Date(),
  },
  {
    title: 'Completed',
    src: '/images/process/completed-done.svg',
    activeSrc: '/images/process/completed.svg',
    date: new Date(),
  },
];

// Current Status
interface Props {
  stage: number;
}

const TrackOrderList = ({ stage }: Props) => {
  return (
    <TrackOrderListContainer>
      {OrderData.map((item, idx) => (
        <TrackOrderItem key={idx} {...item} active={idx <= stage} />
      ))}
    </TrackOrderListContainer>
  );
};

export default TrackOrderList;

const TrackOrderListContainer = styled.ul`
  flex: 1;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0%;
  padding: 0;
  gap: 24px;
`;
