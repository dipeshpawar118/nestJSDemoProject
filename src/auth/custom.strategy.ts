import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class CustomStrategy extends PassportStrategy(Strategy , 'Custom') {
    constructor(private userService : UsersService) {
        super({
          passReqToCallback: true,
        });
      }
    
      async validate(req: Request): Promise<any> {
        let userName =  req.headers["email"]
        let password=  req.headers["password"]

      console.log("Custom")
        const user = await this.userService.loginUser(userName, password);
        if (user === "User login") {
          return user;
        }
        throw new UnauthorizedException();
      }
}