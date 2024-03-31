import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';

import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersService) {}

  //get all users
  @Get()
  findAll(@Query('role') role?: 'FULLSTACK' | 'FRONTEND' | 'BACKEND') {
    return this.userServices.findAll(role);
  }

  //get one user
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userServices.findOne(id);
  }

  //create a user
  @Post()
  create(@Body(ValidationPipe) createUserDto: Prisma.UserCreateInput) {
    return this.userServices.create(createUserDto);
  }

  @Patch(':id')
  update(
    @Param(':id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.userServices.update(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userServices.delete(id);
  }
}
