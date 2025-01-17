import { IsString, IsNumber,IsObject,IsEmail,IsOptional,IsISO8601,IsArray,ValidateNested, IsNotEmpty,} from 'class-validator';
import { Type } from 'class-transformer';
  
  class PaymentMethodDto {
    @IsString()
    @IsNotEmpty()
    type: string;
  
    @IsString()
    @IsNotEmpty()
    token: string;
  
    @IsNumber()
    @IsNotEmpty()
    installments: number;
  }
  
  class CustomerDataDto {
    @IsString()
    @IsOptional()
    phone_number: string;
  
    @IsString()
    @IsOptional()
    full_name: string;
  
    @IsString()
    @IsOptional()
    legal_id: string;
  
    @IsString()
    @IsOptional()
    legal_id_type: string;
  }
  
  class ShippingAddressDto {
    @IsString()
    @IsOptional()
    address_line_1: string;
  
    @IsOptional()
    @IsString()
    address_line_2?: string;
  
    @IsString()
    @IsOptional()
    country: string;
  
    @IsString()
    @IsOptional()
    region: string;
  
    @IsString()
    @IsOptional()
    city: string;
  
    @IsString()
    @IsOptional()
    name: string;
  
    @IsString()
    @IsOptional()
    phone_number: string;
  
    @IsOptional()
    @IsString()
    postal_code?: string;
  }
  
  export class TransactionDto {
    @IsString()
    @IsNotEmpty()
    acceptance_token: string;
  
    @IsNumber()
    @IsNotEmpty()
    amount_in_cents: number;
  
    @IsString()
    @IsNotEmpty()
    currency: string;
  
    @IsString()
    @IsNotEmpty()
    signature: string;
  
    @IsEmail()
    @IsOptional()
    customer_email: string;
  
    @ValidateNested()
    @Type(() => PaymentMethodDto)
    payment_method: PaymentMethodDto;
  
    @IsNumber()
    @IsOptional()
    payment_source_id: number;
  
    @IsString()
    @IsOptional()
    redirect_url: string;
  
    @IsString()
    @IsNotEmpty()
    reference: string;
  
    @IsISO8601()
    @IsOptional()
    expiration_time: string;
  
    @ValidateNested()
    @IsOptional()
    @Type(() => CustomerDataDto)
    customer_data: CustomerDataDto;
  
    @ValidateNested()
    @IsOptional()
    @Type(() => ShippingAddressDto)
    shipping_address: ShippingAddressDto;
  }
  