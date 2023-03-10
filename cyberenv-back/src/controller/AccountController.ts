import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { AccountService } from "../service/AccountService"
import { AccountDTO } from '../dto/AccountDTO';
import { AccountSafeDTO } from '../dto/AccountSafeDTO';


export class AccountController {

    AccountService: AccountService = new AccountService();

    async find(request: Request) : Promise<AccountSafeDTO> { {
        const account = await this.AccountService.findLogin(request.body.login)
        return account
    }
}

    async save(request : Request, response : Response): Promise<AccountDTO|Error>  {
        {
        
        const account : AccountDTO = new AccountDTO(request.body.login,request.body.password)
        try {
            const res = await this.AccountService.createAccount(account);
            console.log("WOOOOOOOOOOOOOOOOOOOOOW",response)
            return res
        }
        catch (error : any) {
            let e =  new Error (error)
            e.name = 'Error : ' + error.message
            return e
        }
    }

}}