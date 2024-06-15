import { IsHexColor, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUsersDto {
  @IsString()
  @ApiProperty({
    description: 'Nombre del usuario',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Email del usuario',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Contraseña del usuario',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'Rol del usuario',
  })
  role: string;
}

export class UpdateUsersDto extends PartialType(CreateUsersDto) {}
