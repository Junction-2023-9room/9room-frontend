type ImageTyps = {
  [key: string]: string;
};

export const IMAGES_PATH: ImageTyps = {
  'agri-chemi': '/images/agri-chemi.svg',
  'exp-flammable': '/images/exp-flammable.svg',
  'expired-med': '/images/expired-med.svg',
  'fluorescent-lights': '/images/fluorescent-lights.svg',
  'lead-acid': '/images/lead-acid.svg',
  'Mercury-containing-Waste': '/images/Mercury-containing-Waste.svg',
  persticides: '/images/persticides.svg',
} as const;
