import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Cat, CatSchema } from 'src/schemas/cat.schema';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {
  // configure(consumer: MiddlewareConsumer ) {
  //   consumer
  //     .apply(LoggerMiddleware)
  //     .forRoutes('cats')
  // }
}
