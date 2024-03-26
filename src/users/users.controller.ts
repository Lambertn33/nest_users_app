import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

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
  findOne(@Param('id') id: string) {
    return this.userServices.findOne(+id);
  }

  //create a user
  @Post()
  create(@Body() user: { name: string; email: string; role: string }) {
    return this.userServices.create(user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() user: { name: string; email: string; role: string },
  ) {
    return this.userServices.update(+id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userServices.delete(+id);
  }
}
