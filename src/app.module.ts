import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonController } from './maraton/maraton.controller';
import { MaratonFileService } from './maraton/maratonFile.service';
import { MaratonMongoService } from './maraton/maratonMongo.service';
import { MaratonService } from './maraton/maraton.service';
import { MaratonFileRepository, MaratonMongoRepository } from './maraton/maraton.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Maraton, MaratonSchema } from './maraton/maraton.schema';
import { ConfigModule } from '@nestjs/config';
import emailConfig  from './config/emailConfig';
import { validationSchema } from './config/validationSchema';
import { LoggerMiddleware } from './users/logger.middleware';
import * as winston from 'winston';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import { ProjectnamingGradeController } from './projectnaming/projectnaming.grade.controller';
import { ProjectNamingGrade, ProjectNamingGradeSchema } from './projectnaming/projectnaming.grade.schema';
import { ProjectnaminggradeService } from './projectnaming/projectnaming.grade.service';
import { ProjectNamingGradeRepository } from './projectnaming/projectnaming.grade.repository';
import { ProjectnamingWorkController } from './projectnaming/projectnaming.work.controller';
import { ProjectnamingWorkService } from './projectnaming/projectnaming.Work.service';
import { ProjectNamingWorkRepository } from './projectnaming/projectnaming.Work.repository';
import { ProjectNamingWork, ProjectNamingWorkSchema } from './projectnaming/projectnaming.work.schema';
import { ProjectnamingRuleController } from './projectnaming/projectnaming.rule.controller';
import { ProjectNamingRuleRepository } from './projectnaming/projectnaming.rule.repository';
import { ProjectnamingRuleService } from './projectnaming/projectnaming.rule.service';
import { ProjectNamingRule, ProjectNamingRuleSchema } from './projectnaming/projectnaming.rule.schema';
import { ProjectnamingBoardController } from './projectnaming/projectnaming.board.controller';
import { ProjectnamingBoardService } from './projectnaming/projectnaming.board.service';
import { ProjectNamingBoardRepository } from './projectnaming/projectnaming.board.repository';
import { ProjectNamingBoard, ProjectNamingBoardSchema } from './projectnaming/projectnaming.board.schema';

import { VersionController } from './version/version.controller';
import { VersionMongoRepository } from './version/version.repository';
import { VersionMongoService } from './version/version.service';
import { Version, VersionSchema } from './version/version.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost/myproject'
    ),
    MongooseModule.forFeature([
      { name: Maraton.name, schema : MaratonSchema },
      { name: Version.name, schema : VersionSchema },
      { name: ProjectNamingGrade.name, schema : ProjectNamingGradeSchema },
      { name: ProjectNamingWork.name, schema : ProjectNamingWorkSchema },
      { name: ProjectNamingRule.name, schema : ProjectNamingRuleSchema },
      { name: ProjectNamingBoard.name, schema : ProjectNamingBoardSchema }
    ]),
    ConfigModule.forRoot({
      envFilePath:[`./env/${process.env.NODE_ENV}.env`],
      load:[emailConfig],
      isGlobal: true,
      validationSchema,    
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          level: process.env.NODE_ENV === 'production' ? 'info' : 'silly', 
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike('MyApp', {prettyPrint: true}),
          ),
        }),
      ],
    }),
  ],
  controllers: [AppController, 
                MaratonController,
                VersionController, 
                ProjectnamingGradeController, ProjectnamingWorkController, ProjectnamingRuleController, ProjectnamingBoardController],
  providers: [AppService, 
              MaratonService, MaratonFileService, MaratonMongoService, MaratonFileRepository, MaratonMongoRepository,
              VersionMongoService, VersionMongoRepository, 
              ProjectnaminggradeService, ProjectNamingGradeRepository,
              ProjectnamingWorkService, ProjectNamingWorkRepository,
              ProjectnamingRuleService, ProjectNamingRuleRepository,
              ProjectnamingBoardService, ProjectNamingBoardRepository,],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes('/users') ;
  }
}
