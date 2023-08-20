import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import BottomButton from '../../components/BottomButton';
import NavHeader from '../../components/Header/NavHeader';
import { defaultFadeInVariants } from '../../constants/motions';
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
      <motion.div
        variants={defaultFadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Info companyName={id as string} />
      </motion.div>
      <motion.div
        variants={defaultFadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <CompanyDetailTab companyName={id as string} />
      </motion.div>

      <BottomButton text="Request Disposal" handler={handleOnClickMove} />
    </div>
  );
};

export default Index;
