import {Inject, Injectable} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import {ConfigType} from "@nestjs/config";
import config from "config";

@Injectable()
export class AppService {
    constructor(
        @Inject(config.KEY) private configService: ConfigType<typeof config>
    ) {
    }

    getHello(): string {
        console.log(this.configService.database.name);
        const apiKey = this.configService.apiKey;
        return 'Hello World! ' + apiKey;
    }
}
