import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// get all the benefits of CreateUserDto (but none are required)
export class UpdateUserDto extends PartialType(CreateUserDto) {}
