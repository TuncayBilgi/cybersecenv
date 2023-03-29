export class AccountDTO {

    public login: string;
    public password: string;
    public valid: boolean;

    constructor(login: string = undefined, password: string = undefined, valid: boolean = true) {
        this.login = login;
        this.password = password;
        this.valid = valid
    }
}


