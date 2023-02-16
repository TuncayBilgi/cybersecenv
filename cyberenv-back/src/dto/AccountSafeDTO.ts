export class AccountSafeDTO {

    public login: string;
    public valid: boolean;
    public id: number;

    constructor(login : string = undefined, id :number, valid: boolean = true ){
            this.id = id;
            this.login = login;
            this.valid = valid
        }
    }