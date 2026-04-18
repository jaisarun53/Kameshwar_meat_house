import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateInquiryDto {
  @IsString()
  @MaxLength(120)
  name!: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  phone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  inquiryType?: string;

  @IsString()
  message!: string;
}
