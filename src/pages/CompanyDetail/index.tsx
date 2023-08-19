import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import BottomButton from '../../components/BottomButton';
import NavHeader from '../../components/Header/NavHeader';
import { LOCAL_STORAGE_KEY } from '../../constants/storage';
import { useScrollTop } from '../../libs/hooks/useScrollTop';
import CompanyDetailTab from './CompanyDetailTab';
import Info from './Info';

const Index = () => {
  useScrollTop();
  const { id } = useParams();

  const navigate = useNavigate();

  const handleOnClickMove = () => {
    const waste = localStorage.getItem(LOCAL_STORAGE_KEY.waste);

    navigate('/process/1', {
      state: {
        companyName: id,
        waste,
      },
    });
  };

  useEffect(() => {
    if (!id) {
      alert('잘못된 접근입니다.');
      navigate('/company');
    }
  }, [id]);

  return (
    <div>
      <NavHeader />
      <Info companyName={id as string} />
      <CompanyDetailTab />
      <BottomButton text="Request Disposal" handler={handleOnClickMove} />
    </div>
  );
};

export default Index;
