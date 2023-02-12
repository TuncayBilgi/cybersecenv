import { AppDataSource } from '../data-source'
import validator from 'validator'

import { AccountDTO } from '../dto/AccountDTO'
import { Account } from '../entity/Account'

export class AccountService {

    accountRepository = AppDataSource.getRepository(Account)

    async findLogin(login: string){
        const account = await this.accountRepository.findOne({
            where: { login : login }
        })
        console.log("wooooooooooooooooooow",account)
        return account
    }

    async createAccount(account: AccountDTO) : Promise<AccountDTO> { {

        if (!account.valid /*|| !this.findLogin(account.login)*/){
            this.findLogin(account.login)
            
        }
        else {
            const {login, password} = account;
            const newAccount : Account = Object.assign(new Account(), {login, password});
            this.accountRepository.save(newAccount)
        }
        return account;
        

    }


}
}

