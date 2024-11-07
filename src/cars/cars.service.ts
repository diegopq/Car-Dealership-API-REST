import { v4 as uuidv4 } from 'uuid';

import { Injectable, NotFoundException } from '@nestjs/common';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    return car;
  }

  create(createCarDto: CreateCarDto): Car {
    const car: Car = {
      id: uuidv4(),
      ...createCarDto,
    };

    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDb = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = { ...car, ...updateCarDto, id };
        return carDb;
      }
      return car;
    });

    return carDb;
  }

  delete(id: string) {
    this.findOneById(id);

    this.cars = this.cars.filter((car) => car.id !== id);

    return 'Car deleted';
  }

  seed(cars: Car[]) {
    this.cars = cars;
  }
}
