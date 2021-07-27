class Book {
    constructor(bookId, title, author, img) {
        this._bookId = bookId;
        this._title = title;
        this._author = author;
        this._img = img;
    }

    get bookId() {
        return this._bookId;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get img() {
        return this._img;
    }

    show() {
        return `
        <div class="card">
            <img class="card-img-top" src="${this.img}" alt="Card image">
            <div class="card-body text-center">
                <p class="card-text">${this.bookId}</p>
                <h5 class="card-title ">${this.title}</h5>
                <p class="card-text">${this.author}</p>
            </div>
        </div>  
        `;
    }
}

export default Book;