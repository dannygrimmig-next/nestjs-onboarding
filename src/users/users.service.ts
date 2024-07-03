import { Injectable, NotFoundException } from '@nestjs/common';
import { RoleOption, User, sampleUsers } from 'data/users';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = sampleUsers;

  findAll(role?: RoleOption) {
    // Handle Query Params
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    // No Query Params
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  create(user: CreateUserDto) {
    // get highest id
    const highestId: number = this.users.sort((a, b) => a.id - b.id)[
      this.users.length - 1
    ].id;

    // create newUser
    const newUser = { id: highestId + 1, ...user };

    // add to users
    this.users.push(newUser);

    // return
    return newUser;
  }

  update(id: number, updatedUser: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        // spread all props of user, and updated user will only update what it contains
        return { ...user, ...updatedUser };
      } else {
        return user;
      }
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
