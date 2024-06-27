import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    HttpModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
