import { IsOptional, IsString, IsUrl, MaxLength } from 'class-validator';

export class UpdateBusinessInfoDto {
  @IsString()
  @MaxLength(120)
  name!: string;

  @IsOptional()
  @IsString()
  @MaxLength(180)
  tagline?: string;

  @IsOptional()
  @IsString()
  story?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  primaryPhone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  whatsappPhone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(160)
  addressLine?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  ward?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  municipality?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  district?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  province?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  country?: string;

  @IsOptional()
  @IsUrl()
  mapsUrl?: string;

  @IsOptional()
  @IsString()
  openingHours?: string;

  @IsOptional()
  @IsUrl()
  heroImageUrl?: string;
}
