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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersService) {}

  //get all users
  @Get()
  findAll(@Query('role') role?: string) {
    return this.userServices.findAll(role);
  }

  //get one user
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userServices.findOne(id);
  }

  //create a user
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userServices.create(createUserDto);
  }

  @Patch(':id')
  update(
    @Param(':id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userServices.update(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userServices.delete(id);
  }
}
