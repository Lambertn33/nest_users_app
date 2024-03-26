import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: Math.floor(Math.random() * 1000) + 1,
      name: 'Lamb',
      email: 'lamb@gmail.com',
      role: 'BACKEND',
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      name: 'eric',
      email: 'eric@gmail.com',
      role: 'FRONTEND',
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      name: 'juslin',
      email: 'juslin@gmail.com',
      role: 'FULLSTACK',
    },
  ];

  findAll(role?: string) {
    return !role ? this.users : this.users.filter((user) => user.role === role);
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: { name: string; email: string; role: string }) {
    const newUser = {
      id: Math.floor(Math.random() * 1000) + 1,
      ...user,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: { name?: string; email?: string; role?: string },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const deletedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return deletedUser;
  }
}
