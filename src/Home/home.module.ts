import { Proverbs } from '../Proverbs/proverbs.entity';
import { HomeService } from './home.service';
import { Module } from "@nestjs/common";
import { HomeController } from './home.controller';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            Proverbs
        ])
    ],
    providers: [HomeService],
    controllers: [HomeController]
})
export class HomeModule {}