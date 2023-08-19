import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import BottomButton from '../../components/BottomButton';
import NavHeader from '../../components/Header/NavHeader';
import { useScrollTop } from '../../libs/hooks/useScrollTop';
import CompanyDetailTab from './CompanyDetailTab';
import Info from './Info';

const Index = () => {
  useScrollTop();
  const { id } = useParams();

  const navigate = useNavigate();

  const handleOnClickMove = () => {
    navigate('/process/1');
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
