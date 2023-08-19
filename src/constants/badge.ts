interface BadgeType {
  src: string;
  title: string;
  background: string;
  color: string;
}

export const BADGE: Record<string, BadgeType> = {
  upcycling: {
    src: '/icons/upcycling.svg',
    title: 'Upcyclable',
    background: '#C0FACD',
    color: '#009A3E',
  },
  warning: {
    src: '/icons/warning.svg',
    title: 'Caution',
    background: '#FFC3C3',
    color: '#ff3737',
  },
} as const;
