import { Body, Controller, Get, Param, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
  
 
  @Get('getAll')
  async getUser(@Body()  userDto : any ) : Promise<UserDto[]> {
        return await this.userService.GetUsers();
      
  }
  @Post('login')
  async userLogin( @Body() userLogin : any ): Promise<string> {  
      return await this.userService.loginUser(userLogin.email,userLogin.password);
  }
}
