import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonController } from './maraton.controller';
import { MaratonFileService } from './maratonFile.service';
import { MaratonMongoService } from './maratonMongo.service';
import { MaratonService } from './maraton.service';
import { MaratonFileRepository, MaratonMongoRepository } from './maraton.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Maraton, MaratonSchema } from './maraton.schema';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import emailConfig  from './config/emailConfig';
import { validationSchema } from './config/validationSchema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost/maraton'
    ),
    MongooseModule.forFeature([{ name: Maraton.name, schema : MaratonSchema}]),
    UsersModule,
    ConfigModule.forRoot({
      envFilePath:["./env/dev.env"],
      load:[emailConfig],
      isGlobal: true,
      validationSchema,    
    }),
  ],
  controllers: [AppController, MaratonController],
  providers: [AppService, MaratonService, MaratonFileService, MaratonMongoService, MaratonFileRepository, MaratonMongoRepository],
})
export class AppModule {}
