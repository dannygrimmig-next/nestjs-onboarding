import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ValidateUserDto } from './dto/validate-user.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(validateUserDto: ValidateUserDto): Promise<any> {
    const user = await this.usersService.findOneByUserName(
      validateUserDto.email,
    );
    if (user?.password !== validateUserDto.password) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}
