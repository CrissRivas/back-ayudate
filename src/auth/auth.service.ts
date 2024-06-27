import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { UsersDto } from './dto/users.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private jwtService: JwtService,
  ) {}
  async login(login: LoginDto) {
    const { data } = await firstValueFrom(
      this.httpService.get<UsersDto>('https://dummyjson.com/users/search', {
        params: { q: login.username, limit: 1 },
      }),
    );

    if (
      data.users.length == 0 ||
      data.users[0].username != login.username ||
      data.users[0].password != login.password
    )
      throw new UnauthorizedException();

    const payload = {
      username: data.users[0].username,
      id: data.users[0].id,
      role: data.users[0].role,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
