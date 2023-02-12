import { Request } from "express";

function validatePassword(password :string): boolean {
    const minlength :number = 7;
    const bannedPasswords : Array<string> = ['0000000','1234567']
    const checklist : Array<boolean> = [
        password.length <= minlength,
        bannedPasswords.includes(password),
    ]
    return checklist.includes(true)
}

export class AccountDTO {

    public login: string;
    public password: string;
    public valid: boolean;

    constructor(request : Request) {
        
        try {
            if ((request.body.login == undefined) || (request.body.password == undefined)){
                throw '0'
            }
            if (validatePassword(request.body.password)){
                throw '1'
            }
            this.login = request.body.login;
            this.password = request.body.password;
            this.valid = true;

        }
        catch(error){
            const errors : Array<string> = [
                'Error : Invalid JSON format, please verify parameters', //+ JSON.stringify(request.body),
                'Error : Invalid Password must be longer than 7 Characters and non trivial',//+ JSON.stringify(request.body),
            ]
            //console.error(errors[error])
            this.login = errors[error];
            this.password = 'error';
            this.valid = false;
        }      
    

    }
}