import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductEntity } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  private products: ProductEntity[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      brand: 'Brand 1',
      stock: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      brand: 'Brand 2',
      stock: 20,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
      brand: 'Brand 3',
      stock: 30,
      image: 'https://via.placeholder.com/150',
    },
  ];

  findAll(): ProductEntity[] {
    return this.products;
  }

  findOne(id: number): ProductEntity {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  create(data: CreateProductDto): ProductEntity {
    const newProduct = {
      id: this.products.length + 1,
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  delete(id: number) {
    const product = this.findOne(id);

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    this.products = this.products.filter((product) => product.id !== id);

    return true;
  }

  update(id: number, changes: Partial<UpdateProductDto>) {
    const product = this.findOne(id);
    const index = this.products.findIndex((product) => product.id === id);
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }
}
