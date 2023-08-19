import React from 'react';

interface Props {
  active: boolean;
}

const Rating = ({ active }: Props) => {
  return <img src={active ? '/icons/star.svg' : '/icons/star-empty.svg'} alt="star" />;
};

export default Rating;
