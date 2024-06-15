import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ParseIntPipe} from "../../common/parse-int/parse-int.pipe";
import {UsersService} from "../services/users.service";
import {CreateUsersDto, UpdateUsersDto} from "../dtos/users.dto";
import {ApiTags} from "@nestjs/swagger";


@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) {
    }

    /**
     * List all users
     *
     * @returns {Promise<User[]>} All users
     */
    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    get(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() payload: CreateUsersDto) {
        return this.usersService.create(payload);
    }

    @Get(':id/orders')
    getUserOrders(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getOrdersByUser(id);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateUsersDto) {
        return this.usersService.update(id, payload);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.remove(id);
    }
}
