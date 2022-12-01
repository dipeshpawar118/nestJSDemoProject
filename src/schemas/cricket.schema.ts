import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { type } from "os";

export type CricketDocument = HydratedDocument<Cricket>;

@Schema()
export class Cricket {
    @Prop()
    name: string;

    @Prop()
    team: string;

    @Prop()
    runs: string;
}

export const CricketSchema = SchemaFactory.createForClass(Cricket);