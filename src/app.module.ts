import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonController } from './maraton.controller';
import { MaratonFileService } from './maratonFile.service';
import { MaratonService } from './maraton.service';
import { MaratonFileRepository } from './maraton.repository';

@Module({
  imports: [],
  controllers: [AppController, MaratonController],
  providers: [AppService, MaratonService, MaratonFileService, MaratonFileRepository],
})
export class AppModule {}
