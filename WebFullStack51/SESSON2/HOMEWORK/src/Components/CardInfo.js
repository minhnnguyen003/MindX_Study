class CardInfo {
    constructor(name, avatarUrl, email, company, followers ) {
        this._name = name;
        this._avatarUrl = avatarUrl;
        this._email = email;
        this._company = company;
        this._followers  = followers;
    }

    get name() {
        return this._name;
    }

    get avatarUrl() {
        return this._avatarUrl;
    }

    get email() {
        return this._email;
    }

    get company() {
        return this._company;
    }

    get followers() {
        return this._followers;
    }

    show() {
        return `
        <div class="app-info">
            <h4 class="text-center text-success fw-bold">User Information</h4>
            <div class="card my-4">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${this.avatarUrl}" class="img-fluid rounded-start" alt="avatar">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title fw-bold mb-3 fs-3">${this.name}</h5>
                            <p class="card-text">Email: ${this.email}</p>
                            <p class="card-text">Company: ${this.company}</p>
                            <p class="card-text">Followers: ${this.followers}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
}

export default CardInfo;