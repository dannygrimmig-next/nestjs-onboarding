import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ValidateUserDto } from './dto/validate-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    validateUserDto: ValidateUserDto,
  ): Promise<{ access_token: string }> {
    // get user
    const user = await this.usersService.findOneByEmail(validateUserDto.email);

    // password does not match
    if (user?.password !== validateUserDto.password) {
      throw new UnauthorizedException();
    }

    // password match (sub: jwt standards)
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
