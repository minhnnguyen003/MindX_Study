import Product from "./Product.js";

class Houseware extends Product {
    constructor(id, name, cost, discount, dateAdd, reliability) {
        super(id, name, cost, discount, dateAdd);
        this._reliability = reliability;
    }

    get reliability() {
        return this._reliability;
    }

    set reliability(reliability) {
        this._reliability = reliability;
    }

    show() {
        return `
        <li class="product" id="${this._id}">
            <div class="product_title style_flex">
                <p>${this._id}</p>
                <p>${this._name}</p>
            </div>
            <div class="product_information">
                <p>Độ bền: ${this._reliability}</p>
                <p>Ngày nhập: ${this._dateAdd}</p>
            </div>
            <div class="product_cost style_flex">
                <p>Giá: ${this._cost}$</p>
                <button class="sell" onclick="import('./processSell.js').then(e => e.sell('${this._id}'))">Sell</button>
            </div>
        </li>
        `;
    }
}

export default Houseware;