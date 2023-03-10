import { AppDataSource } from '../data-source'
import validator from 'validator'

import { AccountDTO } from '../dto/AccountDTO'
import { AccountSafeDTO } from '../dto/AccountSafeDTO'
import { Account } from '../entity/Account'

function validateFormat(login: string, password: string){
    return (login != undefined) || (password != undefined)
}

function validatePassword(password :string): boolean {
    const minlength :number = 7;
    const bannedPasswords : Array<string> = ['0000000','1234567']
    const checklist : Array<boolean> = [
        password.length <= minlength,
        bannedPasswords.includes(password),
    ]
    return !checklist.includes(true)
}

export class AccountService {

    accountRepository = AppDataSource.getRepository(Account)

    async findLogin(login: string) : Promise<AccountSafeDTO>{
        const account : Account = await this.accountRepository.findOne({
            where: { login : login }
            })
        try {
            validateFormat(account.login, account.password)
            const accountfinded : AccountSafeDTO = new AccountSafeDTO(account.login, account.id)
            return accountfinded
        }
        catch (error) {
            const accountfinded : AccountSafeDTO = new AccountSafeDTO(undefined,undefined,false)
            return accountfinded
        }        
    }

    async createAccount(account: AccountDTO) : Promise<AccountDTO> { {

        if ((await this.findLogin(account.login)).valid==true){
            throw new Error ('account already exists')
            
        }
        else if (!validatePassword(account.password)) {
            throw new Error ('invalid password')
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

