import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';
export class idDto {
  @ApiProperty({ example: 198 })
  @IsInt()
  @IsPositive()
  id: number;
}
