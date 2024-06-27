import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'emmaj' })
  @IsString()
  username: string;
  @ApiProperty({ example: 'emmajpass' })
  @IsString()
  password: string;
}
