import { HomeService } from './home.service';
import { Controller, Get } from "@nestjs/common";


@Controller('home')
export class HomeController {

    constructor(private readonly homeservice: HomeService) {}

    @Get()
    findAll() {
        return this.homeservice.findAll();
    }
}