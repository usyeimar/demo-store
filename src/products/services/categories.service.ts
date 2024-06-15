import { Injectable } from '@nestjs/common';
import {
  CreateCategoriesDto,
  UpdateCategoriesDto,
} from '../dtos/categories.dto';
import { CategoriesEntity } from '../entities/categories.entity';

@Injectable()
export class CategoriesService {
  private categories: CategoriesEntity[] = [
    {
      id: 1,
      name: 'Category 1',
      description: 'Description 1',
      color: '#ffffff',
    },
    {
      id: 2,
      name: 'Category 2',
      description: 'Description 2',
      color: '#000000',
    },
  ];

  create(payload: CreateCategoriesDto) {
    const newCategory = {
      id: this.categories.length + 1,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    return this.categories.find((category) => category.id === id);
  }

  remove(id: number) {
    this.categories = this.categories.filter((category) => category.id !== id);
    return true;
  }

  update(id: number, payload: UpdateCategoriesDto) {
    const index = this.categories.findIndex((category) => category.id === id);
    this.categories[index] = {
      ...this.categories[index],
      ...payload,
    };
    return this.categories[index];
  }
}
