import {ProductEntity} from "../../products/entities/product.entity";
import {CustomerEntity} from "./customer.entity";
import {UserEntity} from "./user.entity";

export class OrderEntity {
    date: Date;
    user: UserEntity;
    products: ProductEntity[];

}