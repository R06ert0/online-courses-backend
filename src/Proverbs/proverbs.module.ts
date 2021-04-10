import { TypeOrmModule } from '@nestjs/typeorm';
import { ProverbsService } from './proverbs.service';
import { Module } from "@nestjs/common";
import { ProverbsController } from "./proverbs.controller";
import { Proverbs } from './proverbs.entity';


@Module({
    imports: [
        TypeOrmModule.forFeature([Proverbs])
    ],
    
    providers: [
        ProverbsService
    ],
    controllers: [
        ProverbsController
    ]
})
export class ProverbsModule {}