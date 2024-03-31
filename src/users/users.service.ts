import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(role?: 'FULLSTACK' | 'FRONTEND' | 'BACKEND') {
    return !role
      ? this.databaseService.user.findMany({})
      : this.databaseService.user.findMany({
          where: {
            role,
          },
        });
  }

  async findOne(id: number) {
    const user = this.databaseService.user.findFirst({
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: createUserDto,
    });
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async delete(id: number) {
    return this.databaseService.user.delete({
      where: {
        id,
      },
    });
  }
}
