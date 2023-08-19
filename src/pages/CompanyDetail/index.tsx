import React from 'react';
import { useLocation } from 'react-router-dom';

import Info from './Info';

const Index = () => {
  return (
    <div>
      Company Detail
      <Info companyName="jaka" />
    </div>
  );
};

export default Index;
