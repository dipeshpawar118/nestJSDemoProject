import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cricket, CricketSchema } from 'src/schemas/cricket.schema';
import { CricketController } from './cricket.controller';
import { CricketService } from './cricket.service';

@Module({
  imports : [MongooseModule.forFeature([{ name: Cricket.name, schema: CricketSchema}])],
  controllers: [CricketController],
  providers: [CricketService]
})
export class CricketModule {}
