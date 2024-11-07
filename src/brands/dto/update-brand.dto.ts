import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

//partial type is used to make all the fields of the CreateBrandDto optional
export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsNotEmpty({ message: 'This field cannot be empty' })
  @IsString({ message: 'This field must be a string' })
  @MinLength(3, { message: 'This field must be at least 3 characters' })
  name: string;
}
