import { AdminModule } from './Admin/admin.module';
import { Admins } from './Admin/admins.entity';
import { Proverbs } from './Proverbs/proverbs.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './Home/home.module';
import { ProverbsModule } from './Proverbs/proverbs.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'onlinecourses.cewshcf3k946.eu-west-1.rds.amazonaws.com',
      port: 5432,
      username: 'R0bert0',
      password: 'Powerofwill12.',
      database: 'OnlineCourses',
      entities: [Proverbs, Admins]
    }),
    HomeModule,
    AdminModule,
    ProverbsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
