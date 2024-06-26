import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber, IsString, IsArray, IsDateString, IsEmail, IsUrl, ValidateNested, IsPositive, IsOptional, IsISO8601, IsNotEmpty, Min, Max, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

class Dimensions {
    @ApiProperty({ example: 23.17 })
    @IsNumber()
    @IsPositive()
    width: number;
  
    @ApiProperty({ example: 14.43 })
    @IsNumber()
    @IsPositive()
    height: number;
  
    @ApiProperty({ example: 28.01 })
    @IsNumber()
    @IsPositive()
    depth: number;
  }
  
  class Review {
    @ApiProperty({ example: 2 })
    @IsInt()
    @Min(1)
    @Max(5)
    rating: number;
  
    @ApiProperty({ example: 'Very unhappy with my purchase!' })
    @IsString()
    comment: string;
  
    @ApiProperty({ example: '2024-05-23T08:56:21.618Z' })
    @IsISO8601()
    date: string;
  
    @ApiProperty({ example: 'John Doe' })
    @IsString()
    reviewerName: string;
  
    @ApiProperty({ example: 'john.doe@x.dummyjson.com' })
    @IsEmail()
    reviewerEmail: string;
  }
  
  class Meta {
    @ApiProperty({ example: '2024-05-23T08:56:21.618Z' })
    @IsISO8601()
    createdAt: string;
  
    @ApiProperty({ example: '2024-05-23T08:56:21.618Z' })
    @IsISO8601()
    updatedAt: string;
  
    @ApiProperty({ example: '9164035109868' })
    @IsString()
    barcode: string;
  
    @ApiProperty({ example: 'https://cdn.dummyjson.com/public/qr-code.png' })
    @IsUrl()
    qrCode: string;
  }

export class CreateProductDto {
  
    @ApiProperty({ example: 'Essence Mascara Lash Princess' })
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @ApiProperty({ example: 'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.' })
    @IsString()
    description: string;
  
    @ApiProperty({ example: 'beauty' })
    @IsString()
    category: string;
  
    @ApiProperty({ example: 9.99 })
    @IsNumber()
    @IsPositive()
    price: number;
  
    @ApiProperty({ example: 7.17 })
    @IsNumber()
    @IsPositive()
    discountPercentage: number;
  
    @ApiProperty({ example: 4.94 })
    @IsNumber()
    @Min(0)
    @Max(5)
    rating: number;
  
    @ApiProperty({ example: 5 })
    @IsInt()
    @IsPositive()
    stock: number;
  
    @ApiProperty({ type: [String], example: ['beauty', 'mascara'] })
    @IsArray()
    @IsString({ each: true })
    tags: string[];
  
    @ApiProperty({ example: 'Essence' })
    @IsString()
    brand: string;
  
    @ApiProperty({ example: 'RCH45Q1A' })
    @IsString()
    sku: string;
  
    @ApiProperty({ example: 2 })
    @IsNumber()
    @IsPositive()
    weight: number;
  
    @ApiProperty({ type: Dimensions })
    @ValidateNested()
    @Type(() => Dimensions)
    dimensions: Dimensions;
  
    @ApiProperty({ example: '1 month warranty' })
    @IsString()
    warrantyInformation: string;
  
    @ApiProperty({ example: 'Ships in 1 month' })
    @IsString()
    shippingInformation: string;
  
    @ApiProperty({ example: 'Low Stock' })
    @IsString()
    availabilityStatus: string;
  
    @ApiProperty({ type: [Review] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Review)
    reviews: Review[];
  
    @ApiProperty({ example: '30 days return policy' })
    @IsString()
    returnPolicy: string;
  
    @ApiProperty({ example: 24 })
    @IsInt()
    @IsPositive()
    minimumOrderQuantity: number;
  
    @ApiProperty({ type: Meta })
    @ValidateNested()
    @Type(() => Meta)
    meta: Meta;
  
    @ApiProperty({ type: [String], example: ['https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'] })
    @IsArray()
    images: string[];
  
    @ApiProperty({ example: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png' })
    @IsUrl()
    thumbnail: string;
}

