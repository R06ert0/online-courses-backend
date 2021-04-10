import { Controller, Get } from "@nestjs/common";
import { ProverbsService } from "./proverbs.service";


@Controller('proverbs')
export class ProverbsController {

    constructor(private proverbsService: ProverbsService) {}

    @Get()
    findAll() {
        return this.proverbsService.findAll();
    }
}