class Account {
    constructor(user, email, pass){
        this._user = user;
        this._email = email;
        this._pass = pass;
    }

    get user() {
        return this._user;
    }

    set user(val) {
        this._user = this.user;
    }

    get email() {
        return this._email;
    }

    set email(val) {
        this._email = this.email;
    }
    
    get pass() {
        return this._pass;
    }

    set pass(val) {
        this._pass = this.pass;
    }
}

export default Account;