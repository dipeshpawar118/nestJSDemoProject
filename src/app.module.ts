import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogModule } from './dog/dog.module';
import { LoggerMiddleware } from './middleware/log.middleware';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { NiteshModule } from './nitesh/nitesh.module';

@Module({
  imports: [CatsModule, DogModule ,UsersModule , MongooseModule.forRoot('mongodb+srv://dipeshPawar:UxeqqKHhTPZPSitP@ayushserverdemo.b3wsgy3.mongodb.net/nest?retryWrites=true&w=majority'), AuthModule, NiteshModule],
  controllers: [AppController],
  providers: [AppService ,],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer , ) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
