import { v4 as uuidv4 } from 'uuid';

import { Brand } from 'src/brands/entities/brand.entity';

export const BRAND_SEED: Brand[] = [
  {
    id: uuidv4(),
    name: 'bmw',
    createdAt: Date.now(),
  },
  {
    id: uuidv4(),
    name: 'audi',
    createdAt: Date.now(),
  },
  {
    id: uuidv4(),
    name: 'chevrolet',
    createdAt: Date.now(),
  },
  {
    id: uuidv4(),
    name: 'dodge',
    createdAt: Date.now(),
  },
];
