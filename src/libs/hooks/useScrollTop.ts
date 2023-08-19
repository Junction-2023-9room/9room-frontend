import { useEffect } from 'react';

export const useScrollTop = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
};
