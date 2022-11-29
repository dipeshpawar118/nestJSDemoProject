import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/users.schema';
import { PahadiFigtersController } from './pahadi-figters.controller';
import { PahadiFigtersService } from './pahadi-figters.service';

@Module({
    imports : [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])] ,
    controllers: [PahadiFigtersController],
    providers: [PahadiFigtersService],
    exports : [PahadiFigtersService] 
  })
export class PahadiFightersModule {}
