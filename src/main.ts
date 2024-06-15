import {NestFactory} from '@nestjs/core';
import {ValidationPipe} from "@nestjs/common";
import {AppModule} from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Store API')
        .setDescription('The store API description')
        .setVersion('1.0')
        .addTag('store')
        .build();


    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    await app.listen(3000);
}

bootstrap();
