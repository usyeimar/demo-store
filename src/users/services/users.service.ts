import {Inject, Injectable} from '@nestjs/common';
import {UserEntity} from "../entities/user.entity";
import {CreateUsersDto, UpdateUsersDto} from "../dtos/users.dto";
import {ProductsService} from "../../products/services/products.service";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class UsersService {
    constructor(
        private productsService: ProductsService,
        private configService: ConfigService,
        @Inject('API_KEY') private readonly apiKey: string,
    ) {
    }

    private users: UserEntity[] = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@gmail.com',
            role: 'admin',
            password: '123456'
        },

        {
            id: 2,
            name: 'Jane Doe',
            email: 'jane@domin.com',
            role: 'user',
            password: '123456'
        }
    ]

    getOrdersByUser(id: number) {
        const user = this.findOne(id);
        return {
            date: new Date(),
            user,
            products: this.productsService.findAll()
        }
    }

    findAll() {
        console.log(this.configService.get('DATABASE_NAME'));

        return this.users;
    }

    create(payload: CreateUsersDto) {
        const newUser: UserEntity = {
            id: this.users.length + 1,
            ...payload
        }
        this.users.push(newUser);
        return newUser;
    }

    findOne(id: number) {
        return this.users.find(user => user.id === id);
    }

    remove(id: number) {
        this.users = this.users.filter(user => user.id !== id);
        return true;
    }


    update(id: number, payload: UpdateUsersDto) {
        const index = this.users.findIndex(user => user.id === id);
        this.users[index] = {
            ...this.users[index],
            ...payload
        }
        return this.users[index];
    }


}
