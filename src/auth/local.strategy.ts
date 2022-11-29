import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private userService : UsersService) {
        super({
          passReqToCallback: true,
        });
      }
    
      async validate(req: Request): Promise<any> {

        // console.log(username ,password)
        const user = await this.userService.loginUser("username", "password");
        if (user === "User login") {
          return user;
        }
        throw new UnauthorizedException();
      }
}