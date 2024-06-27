import { ApiProperty } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsArray, IsInt, IsPositive } from 'class-validator';

export class productsDto {
  @ApiProperty({ type: [CreateProductDto] })
  @IsArray()
  products: CreateProductDto[];

  @ApiProperty({ example: 194 })
  @IsInt()
  @IsPositive()
  total: number;

  @ApiProperty({ example: 0 })
  @IsInt()
  @IsPositive()
  skip: number;

  @ApiProperty({ example: 30 })
  @IsInt()
  @IsPositive()
  limit: number;
}
