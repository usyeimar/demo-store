import { Injectable } from '@nestjs/common';
import { CustomerEntity } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dto';

@Injectable()
export class CustomersService {
  private customers: CustomerEntity[] = [
    {
      id: 1,
      name: 'Customer 1',
      lastName: 'Last Name 1',
      phone: '1234567890',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }

  create(payload: CreateCustomerDto) {
    const newCustomer = {
      id: this.customers.length + 1,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const index = this.customers.findIndex((customer) => customer.id === id);
    this.customers[index] = {
      ...this.customers[index],
      ...payload,
    };
    return this.customers[index];
  }

  remove(id: number) {
    this.customers = this.customers.filter((customer) => customer.id !== id);
    return true;
  }
}
