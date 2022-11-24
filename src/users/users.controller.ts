import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService : UsersService){

  }

  @Post('add')
  async addUser(@Body()  userDto :  UserDto){
          return await this.userService.AddUsers(userDto);
  }
   
  @Get()
  async getUser() : Promise<UserDto[]> {
      return await this.userService.GetUsers();
  }
}
