export interface Company {
  name: string;
  nameImg: string;
  img: string;
  location: string;
  time: string;
  rating: string;
  desc: string;
  cheaper: string;

  // detail
  reviewCount: number;
  price: number;
  images: string[];
}

export const COMPANY: Record<string, Company> = {
  jaka: {
    name: 'Jaka',
    nameImg: '/images/company/jaka-logo.svg',
    img: '/images/company/jaka-img.png',
    location: 'Near Seoul',
    time: 'Within 2 days',
    rating: '4.5',
    desc: 'Impressed with their use of cobot. The disposal process was not only efficiThe disposal process was not only effici',
    cheaper: '30%',
    reviewCount: 1000,
    price: 100000,
    images: ['/images/company/jaka-1.png', '/images/company/jaka-2.png'],
  },
};

export const COMPANY_LIST: Company[] = Object.values(COMPANY);
