import { IsHexColor, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCategoriesDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsHexColor()
  color: string;
}

export class UpdateCategoriesDto extends PartialType(CreateCategoriesDto) {}
