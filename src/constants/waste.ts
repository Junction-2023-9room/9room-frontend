type ImageTyps = {
  [key: string]: string;
};

export const IMAGES_PATH: ImageTyps = {
  persticides: '/images/persticides.svg',
  'agri-chemi': '/images/agri-chemi.svg',
  'exp-flammable': '/images/exp-flammable.svg',
  'expired-med': '/images/expired-med.svg',
  'fluorescent-lights': '/images/fluorescent-lights.svg',
  'lead-acid': '/images/lead-acid.svg',
  'Mercury-containing-Waste': '/images/Mercury-containing-Waste.svg',
  'mercury-sphy': '/images/mercury-sphy.svg',
  'mercury-thermo': '/images/mercury-thermo.svg',
  'Mercury-containing-Waste-etc': '/images/etc.svg',
} as const;

export const WASTE_LIST_LABEL: {
  [key: string]: string;
} = {
  persticides: 'Pesticides',
  'agri-chemi': 'Agricultural Chemicals',
  'exp-flammable': 'Explosive & Flammable',
  'expired-med': 'Expired Medicines',
  'fluorescent-lights': 'Fluorescent Lights',
  'lead-acid': 'Lead-acid Batteries',
  'Mercury-containing-Waste': 'Mercury-containing Waste',
  'mercury-sphy': 'Mercury Sphygmomanometers',
  'mercury-thermo': 'Mercury Thermometers',
  'Mercury-containing-Waste-etc': 'etc',
} as const;

export const WASTE_LIST: {
  label: string;
  id: string;
  subItems?: {
    label: string;
    id: string;
  }[];
}[] = [
  {
    label: 'Pesticides',
    id: 'persticides',
  },
  {
    label: 'Agricultural Chemicals',
    id: 'agri-chemi',
  },
  {
    label: 'Fluorescent Lights',
    id: 'fluorescent-lights',
  },
  {
    label: 'Mercury-containing Waste',
    id: 'Mercury-containing-Waste',
    subItems: [
      {
        label: 'Mercury Thermometers',
        id: 'mercury-thermo',
      },
      {
        label: 'Mercury Sphygmomanometers',
        id: 'mercury-sphy',
      },
      {
        label: 'etc',
        id: 'Mercury-containing-Waste-etc',
      },
    ],
  },
  {
    label: 'Expired Medicines',
    id: 'expired-med',
  },
  {
    label: 'Explosive & Flammable',
    id: 'exp-flammable',
  },
  {
    label: 'Lead-acid Batteries',
    id: 'lead-acid',
  },
];
