import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateCardDto {
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^\d{16}$/, {
    message: 'El número de tarjeta debe ser un string de 16 dígitos.',
  })
  number: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  @Length(2, 2, {
    message: 'El mes de expiración debe ser un string de 2 dígitos.',
  })
  exp_month: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  @Length(2, 2, {
    message: 'El año de expiración debe ser un string de 2 dígitos.',
  })
  exp_year: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^\d{3,4}$/, {
    message: 'El CVC debe ser un string de 3 o 4 dígitos.',
  })
  cvc: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  card_holder: string;
}
