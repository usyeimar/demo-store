import {Controller, Get, Param, Query} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }


    @Get('/demo')
    getHola(): string {
        return 'Hi there!, this is a demo';
    }

    @Get('/hello/:name')
    getHelloName(@Param('name') name: string): string {
        return `Hello ${name}`;
    }

    //Query params


}
