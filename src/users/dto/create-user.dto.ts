import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { RoleOption } from 'data/users';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  //  @IsEnum
  role: RoleOption;
}
