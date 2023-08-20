import { useEffect, useState } from 'react';

import { get } from '../api';

const useLoadingDelay = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    await get('/progress/calculate');

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return isLoading;
};

export default useLoadingDelay;
