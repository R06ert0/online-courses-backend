import { Proverbs } from '../Proverbs/proverbs.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';


@Injectable()
export class HomeService {

    constructor(
        @InjectRepository(Proverbs)
        private readonly proverbsRep: Repository<Proverbs>
    ) {}

    async findAll(): Promise<Proverbs[]> {
        return this.proverbsRep.find();
    }
}