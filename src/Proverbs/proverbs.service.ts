import { Repository } from 'typeorm';
import { Proverbs } from './proverbs.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class ProverbsService {

    constructor(
        @InjectRepository(Proverbs)
        private proverbsRepo: Repository<Proverbs>
    ) {}

    async findAll(): Promise<Proverbs[]> {
        return this.proverbsRepo.find();
    }
}