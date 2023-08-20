import type { ReactElement } from 'react';
import { create } from 'zustand';

export interface ToastProps {
  id: string;
  content: string | ReactElement;
}

interface ToastState {
  toast: ToastProps | null;
  setToast: (toast: ToastProps | null) => void;
  removeToast: (id: string) => ToastProps | null;
}

export const useToastStore = create<ToastState>((set, get) => ({
  toast: null,
  setToast: (toast: ToastProps | null) => set(() => ({ toast })),
  removeToast: (id: string) => {
    const prevToast = get().toast;
    if (!prevToast) return null;
    if (prevToast.id === id) {
      set(() => ({ toast: null }));
    }
    return prevToast;
  },
}));
