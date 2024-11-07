import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuidv4(),
    brand: 'audi',
    model: 'a4',
  },
  {
    id: uuidv4(),
    brand: 'bmw',
    model: 'x3',
  },
  {
    id: uuidv4(),
    brand: 'chevrolet',
    model: 'camaro',
  },
  {
    id: uuidv4(),
    brand: 'dodge',
    model: 'challenger',
  },
];
