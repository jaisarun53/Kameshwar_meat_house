import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateMediaMentionDto {
  @IsString()
  @MaxLength(160)
  title!: string;

  @IsString()
  @MaxLength(120)
  sourceName!: string;

  @IsOptional()
  @IsString()
  @MaxLength(60)
  sourceType?: string;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsUrl()
  url!: string;

  @IsOptional()
  @IsUrl()
  thumbnailUrl?: string;

  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @IsOptional()
  @IsDateString()
  publishedAt?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  displayOrder?: number;
}
