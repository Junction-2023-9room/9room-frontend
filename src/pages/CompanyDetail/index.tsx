import React from 'react';
import { useNavigate } from 'react-router-dom';

import BottomButton from '../../components/BottomButton';
import NavHeader from '../../components/Header/NavHeader';
import CompanyDetailTab from './CompanyDetailTab';

const Index = () => {
  const navigate = useNavigate();

  const handleOnClickMove = () => {
    navigate('/process/1');
  };

  return (
    <div>
      <div style={{ padding: '0 20px' }}>
        <NavHeader />
      </div>
      <CompanyDetailTab />
      <BottomButton text="Request Disposal" handler={handleOnClickMove} />
    </div>
  );
};

export default Index;
