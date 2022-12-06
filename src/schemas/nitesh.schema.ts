
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NiteshDocument = HydratedDocument<Nitesh>;

@Schema()
export class Nitesh {
    @Prop()
    name: string;

    @Prop()
    jerseyno: number;

    @Prop()
    position: string;

    @Prop()
    club: string;
}

export const NiteshSchema = SchemaFactory.createForClass(Nitesh);