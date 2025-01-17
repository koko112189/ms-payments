import { IsString, IsEmail } from 'class-validator';

export class paymentSourceDto {
  @IsString()
  type: string;

  @IsString()
  token: string;

  @IsEmail()
  customer_email: string;

  @IsString()
  acceptance_token: string;

  @IsString()
  accept_personal_auth: string;
}
