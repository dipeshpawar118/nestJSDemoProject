import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/dto/user.dto';
import { User, UserDocument } from 'src/schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>){

    }

     async AddUsers( createUserDto :UserDto) : Promise<User> {
        let createdUserDto = new this.UserModel(createUserDto)
        return createdUserDto.save();
    }

    async GetUsers(): Promise<User[]> {
        return this.UserModel.find().exec();
      }

 
}
