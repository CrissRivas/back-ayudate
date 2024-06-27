import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';

class Hair {
  @ApiProperty({ example: 'Brown' })
  @IsString()
  color: string;

  @ApiProperty({ example: 'Curly' })
  @IsString()
  type: string;
}

class Coordinates {
  @ApiProperty({ example: -77.16213 })
  @IsNumber()
  lat: number;

  @ApiProperty({ example: -92.084824 })
  @IsNumber()
  lng: number;
}

class Address {
  @ApiProperty({ example: '626 Main Street' })
  @IsString()
  address: string;

  @ApiProperty({ example: 'Phoenix' })
  @IsString()
  city: string;

  @ApiProperty({ example: 'Mississippi' })
  @IsString()
  state: string;

  @ApiProperty({ example: 'MS' })
  @IsString()
  stateCode: string;

  @ApiProperty({ example: '29112' })
  @IsString()
  postalCode: string;

  @ApiProperty({ type: Coordinates })
  @ValidateNested()
  @Type(() => Coordinates)
  coordinates: Coordinates;

  @ApiProperty({ example: 'United States' })
  @IsString()
  country: string;
}

class Bank {
  @ApiProperty({ example: '03/26' })
  @IsString()
  cardExpire: string;

  @ApiProperty({ example: '9289760655481815' })
  @IsString()
  cardNumber: string;

  @ApiProperty({ example: 'Elo' })
  @IsString()
  cardType: string;

  @ApiProperty({ example: 'CNY' })
  @IsString()
  currency: string;

  @ApiProperty({ example: 'YPUXISOBI7TTHPK2BR3HAIXL' })
  @IsString()
  iban: string;
}

class Company {
  @ApiProperty({ example: 'Engineering' })
  @IsString()
  department: string;

  @ApiProperty({ example: 'Dooley, Kozey and Cronin' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Sales Manager' })
  @IsString()
  title: string;

  @ApiProperty({ type: Address })
  @ValidateNested()
  @Type(() => Address)
  address: Address;
}

class Crypto {
  @ApiProperty({ example: 'Bitcoin' })
  @IsString()
  coin: string;

  @ApiProperty({ example: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a' })
  @IsString()
  wallet: string;

  @ApiProperty({ example: 'Ethereum (ERC20)' })
  @IsString()
  network: string;
}

class User {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  id: number;

  @ApiProperty({ example: 'Emily' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Johnson' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'Smith' })
  @IsString()
  @IsOptional()
  maidenName?: string;

  @ApiProperty({ example: 28 })
  @IsInt()
  @IsPositive()
  age: number;

  @ApiProperty({ example: 'female' })
  @IsString()
  gender: string;

  @ApiProperty({ example: 'emily.johnson@x.dummyjson.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '+81 965-431-3024' })
  @IsString()
  phone: string;

  @ApiProperty({ example: 'emilys' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'emilyspass' })
  @IsString()
  password: string;

  @ApiProperty({ example: '1996-5-30' })
  @IsDateString()
  birthDate: string;

  @ApiProperty({ example: 'https://dummyjson.com/icon/emilys/128' })
  @IsUrl()
  image: string;

  @ApiProperty({ example: 'O-' })
  @IsString()
  bloodGroup: string;

  @ApiProperty({ example: 193.24 })
  @IsNumber()
  height: number;

  @ApiProperty({ example: 63.16 })
  @IsNumber()
  weight: number;

  @ApiProperty({ example: 'Green' })
  @IsString()
  eyeColor: string;

  @ApiProperty({ type: Hair })
  @ValidateNested()
  @Type(() => Hair)
  hair: Hair;

  @ApiProperty({ example: '42.48.100.32' })
  @IsString()
  ip: string;

  @ApiProperty({ type: Address })
  @ValidateNested()
  @Type(() => Address)
  address: Address;

  @ApiProperty({ example: '47:fa:41:18:ec:eb' })
  @IsString()
  macAddress: string;

  @ApiProperty({ example: 'University of Wisconsin--Madison' })
  @IsString()
  university: string;

  @ApiProperty({ type: Bank })
  @ValidateNested()
  @Type(() => Bank)
  bank: Bank;

  @ApiProperty({ type: Company })
  @ValidateNested()
  @Type(() => Company)
  company: Company;

  @ApiProperty({ example: '977-175' })
  @IsString()
  ein: string;

  @ApiProperty({ example: '900-590-289' })
  @IsString()
  ssn: string;

  @ApiProperty({
    example:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
  })
  @IsString()
  userAgent: string;

  @ApiProperty({ type: Crypto })
  @ValidateNested()
  @Type(() => Crypto)
  crypto: Crypto;

  @ApiProperty({ example: 'admin' })
  @IsString()
  role: string;
}

export class UsersDto {
  @ApiProperty({ type: [User] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => User)
  users: User[];

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  total: number;

  @ApiProperty({ example: 0 })
  @IsInt()
  @IsPositive()
  skip: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  limit: number;
}
