import { newAdmin } from '../Models/newadmin.model';
import { Report } from '../Models/report.model';
import { Admin } from '../Models/admin.model';
import { AdminService } from './admin.service';
import { Body, Controller, Get, Param, Post} from "@nestjs/common";


@Controller('admin')
export class AdminController {

    constructor(private adminService: AdminService) { }

    @Get()
    findAll() {
        return this.adminService.findAll();
    }

    @Post('/login')
    authAdmin(@Body() admin: Admin): Promise<Report> {
        let dec = atob(admin.password);
        return this.adminService.authAdmin(admin.name, dec);
    }

    @Post('/register')
    addAdmin(@Body() admin: newAdmin) {
        return this.adminService.addAdmin(admin);
    }

    @Post('/:id/delete')
    deleteAdmin(@Param('id') id: number, @Body() packageWithBoolean: Report): Promise<Report> {
        return this.adminService.deleteAdmin(id, packageWithBoolean.succes);
    }

    @Post('/update')
    updateAdmin(@Body() admin: Admin) {
        return this.adminService.updateAdmin(admin);
    }
}