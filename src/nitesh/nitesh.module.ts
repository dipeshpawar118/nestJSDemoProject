import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Nitesh, NiteshSchema } from 'src/schemas/nitesh.schema';
import { NiteshController } from './nitesh.controller';
import { NiteshService } from './nitesh.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Nitesh.name, schema: NiteshSchema }])],
  controllers: [NiteshController],
  providers: [NiteshService],
  exports: [NiteshService]
})
export class NiteshModule { }
