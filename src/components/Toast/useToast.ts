import { type ReactElement, useCallback } from 'react';

import { useToastStore } from '../../libs/toast';

interface FireToast {
  content: string | ReactElement;
  duration?: number;
  isIcon?: boolean;
}

const DEFAULT_DURATION = 1500;

const useToast = () => {
  const { toast, setToast, removeToast } = useToastStore();

  const fireToast = useCallback(({ content, duration = DEFAULT_DURATION }: FireToast) => {
    const id = new Date().getTime().toString();
    setToast({ id, content });
    setTimeout(() => removeToast(id), duration);
  }, []);

  return { toast, fireToast };
};

export default useToast;
