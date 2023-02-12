import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { AccountService } from "../service/AccountService"
import { AccountDTO } from '../dto/AccountDTO';


export class AccountController {

    AccountService: AccountService = new AccountService();

    async find(request: Request) {
        return false;
    }

    async save(request : Request) : Promise<AccountDTO> {
        const account : AccountDTO = new AccountDTO(request);
        const response = this.AccountService.createAccount(account);
        console.log(response)
        return response
    }

}