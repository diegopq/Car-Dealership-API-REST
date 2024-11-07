import { v4 as uuidv4 } from 'uuid';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Brand } from './entities/brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const newBrand: Brand = {
      id: uuidv4(),
      name: name.toLocaleLowerCase(),
      createdAt: Date.now(),
    };

    this.brands.push(newBrand);

    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const { name } = updateBrandDto;
    console.log(name);

    if (!name) {
      throw new BadRequestException('Name is required');
    }

    let brand = this.findOne(id);

    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }

    const updatedBrands = this.brands.map((brand) => {
      if (brand.id === id) {
        return {
          ...brand,
          name,
          updatedAt: Date.now(),
        };
      }

      return brand;
    });

    this.brands = updatedBrands;

    return this.findOne(id);
  }

  remove(id: string) {
    const brand = this.findOne(id);

    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }

    this.brands = this.brands.filter((brand) => brand.id !== id);

    return brand;
  }

  seed(brands: Brand[]) {
    this.brands = brands;
  }
}
