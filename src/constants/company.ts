export interface Company {
  id: string;
  name: string;
  nameImg: string;
  img: string;
  location: string;
  time: string;
  rating: string;
  desc: string;
  cheaper?: boolean;
  tag: string;

  // detail
  reviewCount: number;
  price: number;
  images: string[];
}

export const COMPANY: Record<string, Company> = {
  jaka: {
    id: 'jaka',
    name: 'Jaka',
    nameImg: '/images/company/sk-logo.png',
    img: '/images/company/jaka-img.png',
    location: 'Near Seoul',
    time: 'Within 2 days',
    rating: '4.5',
    desc: 'Impressed with their use of cobot. The disposal process was not only efficiThe disposal process was not only effici',
    cheaper: true,
    tag: '30% cheaper',
    reviewCount: 1000,
    price: 100000,
    images: ['/images/company/jaka-1.png', '/images/company/jaka-2.png'],
  },
  gds: {
    id: 'gds',
    name: 'GDS',
    nameImg: '/images/company/gds-logo.png',
    img: '/images/company/gds-img.png',
    location: 'Central Seoul',
    time: 'Within 5 days',
    rating: '4.3',
    desc: 'Reliable service but a bit on the pricier side.',
    tag: 'Standard',
    reviewCount: 1000,
    price: 130000,
    images: [],
  },
  mercury: {
    id: 'mercury',
    name: 'Mercury',
    nameImg: '/images/company/mercury-logo.png',
    img: '/images/company/mercury-img.png',
    location: 'Seoul Outside',
    time: 'Within 7 days',
    rating: '4.2',
    desc: 'Good service, but processing time was longer than expected.',
    tag: 'Slightly above',
    reviewCount: 1000,
    price: 200000,
    images: [],
  },
  quickDispose: {
    id: 'quickDispose',
    name: 'Quick Dispose',
    nameImg: '/images/company/quick-dispose-logo.png',
    img: '/images/company/quick-dispose-img.png',
    location: 'Farthest form Seoul',
    time: 'Within 8 days',
    rating: '3.9',
    desc: 'Service was okay, but there were some delays.',
    tag: '10% above ',
    reviewCount: 1000,
    price: 250000,
    images: [],
  },
  safeMercuryDisposals: {
    id: 'safeMercuryDisposals',
    name: 'Safe Mercury Disposals',
    nameImg: '/images/company/safe-mercury-disposals-logo.png',
    img: '/images/company/safe-mercury-disposals-img.png',
    location: 'Near Seoul',
    time: 'Within 9 days',
    rating: '3.7',
    desc: 'Name is misleading. Took longer than expected.',
    tag: '15% above',
    reviewCount: 1000,
    price: 300000,
    images: [],
  },
};

export const COMPANY_LIST: Company[] = Object.values(COMPANY);
