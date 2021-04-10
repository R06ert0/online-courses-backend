import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Admins } from './admins.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";


@Module({
    imports: [
        TypeOrmModule.forFeature([Admins])
    ],
    providers: [AdminService],
    controllers: [AdminController]
})
export class AdminModule {}