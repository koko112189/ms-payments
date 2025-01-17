import { IsString, IsNumber,IsObject,IsEmail,IsOptional,IsISO8601,IsArray,ValidateNested, IsNotEmpty,} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
  
  class PaymentMethodDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    type: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    token: string;
  
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    installments: number;
  }
  
  class CustomerDataDto {
    @IsString()
    @IsOptional()
    @ApiProperty()
    phone_number: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    full_name: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    legal_id: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    legal_id_type: string;
  }
  
  class ShippingAddressDto {
    @IsString()
    @IsOptional()
    @ApiProperty()
    address_line_1: string;
  
    @IsOptional()
    @IsString()
    @ApiProperty()
    @Transform(({ value }) => (value === '' ? undefined : value))
    address_line_2?: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    country: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    region: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    city: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    name: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    phone_number: string;
  
    @IsOptional()
    @IsString()
    @ApiProperty()
    @Transform(({ value }) => (value === '' ? undefined : value))
    postal_code?: string;
  }
  
  export class TransactionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    acceptance_token: string;
  
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    amount_in_cents: number;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    currency: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    signature: string;
  
    @IsEmail()
    @IsOptional()
    @ApiProperty()
    customer_email: string;
  
    @ValidateNested()
    @ApiProperty()
    @Type(() => PaymentMethodDto)
    payment_method: PaymentMethodDto;
  
    @IsNumber()
    @IsOptional()
    @ApiProperty()
    @Transform(({ value }) => (value === 0 ? undefined : value))
    payment_source_id?: number;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    @Transform(({ value }) => (value === '' ? undefined : value))
    redirect_url?: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    reference: string;
  
    @IsISO8601()
    @IsOptional()
    @ApiProperty()
    @Transform(({ value }) => (value === '' ? undefined : value))
    expiration_time?: string;
  
    @ApiProperty()
    @ValidateNested()
    @IsOptional()
    @Type(() => CustomerDataDto)
    customer_data: CustomerDataDto;
  
    @ApiProperty()
    @ValidateNested()
    @IsOptional()
    @Type(() => ShippingAddressDto)
    shipping_address: ShippingAddressDto;
  }
  