import {Injectable} from '@nestjs/common';
import {BrandsEntity} from "../entities/brands.entity";
import {CreateBrandsDto, UpdateBrandDto} from "../dtos/brands.dto";

@Injectable()
export class BrandsService {

    private brands: BrandsEntity[] = [
        {
            id: 1,
            name: 'Brand 1',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            name: 'Brand 2',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            name: 'Brand 3',
            image: 'https://via.placeholder.com/150'
        },
    ]

    findOne(id: number) {
        return this.brands.find(brand => brand.id === id);
    }

    findAll() {
        return this.brands;
    }

    create(payload: any) {
        const newBrand = {
            id: this.brands.length + 1,
            ...payload
        }
        this.brands.push(newBrand);
        return newBrand;
    }


    update(id: number, payload: UpdateBrandDto) {
        const index = this.brands.findIndex(brand => brand.id === id);
        this.brands[index] = {
            ...this.brands[index],
            ...payload
        }
        return this.brands[index];
    }


    remove(id: number) {
        this.brands = this.brands.filter(brand => brand.id !== id);
        return true;
    }


}
