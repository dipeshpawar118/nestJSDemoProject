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
import { PahadiFightersModule } from './pahadi-figters/pahadi-fighters.module';
import { PahadiFigtersController } from './pahadi-figters/pahadi-figters.controller';
import { PahadiFigtersService } from './pahadi-figters/pahadi-figters.service';
import { CricketModule } from './cricket/cricket.module';

@Module({
  imports: [CatsModule, DogModule ,UsersModule , AuthModule, PahadiFightersModule, CricketModule , MongooseModule.forRoot('mongodb+srv://dipeshPawar:UxeqqKHhTPZPSitP@ayushserverdemo.b3wsgy3.mongodb.net/nest?retryWrites=true&w=majority')],
  controllers: [AppController, PahadiFigtersController],
  providers: [AppService , PahadiFigtersService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer , ) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
