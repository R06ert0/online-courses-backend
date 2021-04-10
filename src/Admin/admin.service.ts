import { newAdmin } from '../Models/newadmin.model';
import { Report } from '../models/report.model';
import { Admin } from '../models/admin.model';
import { Admins } from './admins.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admins)
        private readonly adminRepo: Repository<Admins>
    ) { }

    findAll() {
        return this.adminRepo.find();
    }

    /* This method takes as parameter name and password, then try to find it BY NAME in database and
    when compare names and passwords, return object with boolean value, if admin is authenticated and 
    message with a description of the result :) */
    async authAdmin(name: string, password: string) {
        let foundOne = await this.adminRepo.findOne({ name: name });
        let report: Report = {
            succes: false,
            message: ''
        };

        if (foundOne == undefined) {
            report.message = 'Špatné jméno!';
            report.succes = false;
        } else if (foundOne.password != password) {
            report.message = 'Špatné heslo!'
            report.succes = false;
        } else {
            report.message = 'Admin ověřen a úspěšně přihlášen!';
            report.succes = true;
        }
        return report;
    }

    /* Frist this method find out, if credentials already exist and then, if not, pushes new admin to the db */
    async addAdmin(admin: newAdmin) {
        let report: Report = {
            succes: false,
            message: ''
        };

        if (await this.adminRepo.findOne({ name: admin.name })) {
            report.succes = false;
            report.message = 'Admin již existuje!'
        } else {
            this.adminRepo.save(admin);
            report.succes = true;
            report.message = 'Admin úspěšně vložen!'
        }
        return report;
    }

    //Deleting admin by ID
    async deleteAdmin(id: number, auth: boolean) {
        let report: Report = {
            succes: false,
            message: ''
        };

        if (auth) {
            if (await this.adminRepo.findOne(id)) {
                await this.adminRepo.delete(id);
                report.succes = true;
                report.message = 'Admin deleted';
            } else {
                report.succes = false;
                report.message = 'Admin s tímto ID neexistuje!'
            }
        } else {
            report.succes = false;
            report.message = 'Nemáš oprávnění mazat!'
        }

        return report;
    }

    async updateAdmin(admin: Admin) {
        let report: Report = {
            succes: false,
            message: ''
        };

        if (await this.adminRepo.findOne(admin.id)) {
            await this.adminRepo.update(admin.id, admin);
            report.succes = true;
            report.message = 'Admin úspěšně aktualizován';
        } else {
            report.succes = false;
            report.message = 'Admin s tímto ID neexistuje';
        }
        return report;
    }
}