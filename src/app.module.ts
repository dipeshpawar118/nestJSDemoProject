import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogModule } from './dog/dog.module';
import { LoggerMiddleware } from './middleware/log.middleware';

@Module({
  imports: [CatsModule, DogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer , ) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
