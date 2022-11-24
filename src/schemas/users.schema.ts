
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

    @Prop()
    userId: number;

    @Prop()
    name: string;

    @Prop()
    role: string;

    @Prop()
    email: string;

    @Prop()
    mobile: number;

    @Prop()
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);