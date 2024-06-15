import {IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl} from "class-validator";
import {ApiProperty, PartialType} from "@nestjs/swagger";

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Nombre del producto',
    })
    readonly name: string;

    @IsString()
    @IsNotEmpty()

    @ApiProperty({
        description: 'Descripción del producto',
    })
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()

    readonly price: number;

    @IsString()
    @IsNotEmpty()
    readonly brand: string;

    @IsNumber()
    @IsNotEmpty()

    readonly stock: number;
    @IsUrl()
    @IsNotEmpty()

    readonly image: string;
}


export class UpdateProductDto extends PartialType(CreateProductDto) {
}