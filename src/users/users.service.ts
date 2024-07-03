import { Injectable } from '@nestjs/common';
import { RoleOption, User, sampleUsers } from 'data/users';

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
    return this.users.find((user) => user.id === id);
  }

  create(user: { name: string; email: string; role: RoleOption }) {
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

  update(
    id: number,
    updatedUser: { name?: string; email?: string; role?: RoleOption },
  ) {
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
