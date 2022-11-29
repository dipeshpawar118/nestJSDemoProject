import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { CustomStrategy } from './custom.strategy';

@Module({  
    imports:  [UsersModule , PassportModule  ],
    providers: [ LocalStrategy, AuthService , CustomStrategy ],
})
export class AuthModule {
  
}
