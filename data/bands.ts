import { CreateBandDto } from 'src/bands/dto/create-band.dto';

export const sampleBands: CreateBandDto[] = [
  {
    id: 1,
    name: 'Tallest Man on Earth',
    origin: 'Sweeden',
    years: '2006',
    website: 'https://thetallestmanonearth.com/',
  },
  {
    id: 2,
    name: 'Bob Dylan',
    origin: 'USA',
    years: '1962',
    website: 'https://www.bobdylan.com/',
  },
  {
    id: 3,
    name: 'Shakey Graves',
    origin: 'USA',
    years: '2005',
    website: 'https://www.shakeygraves.com/',
  },
];
