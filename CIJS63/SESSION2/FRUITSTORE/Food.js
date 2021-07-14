import Product from "./Product.js";

class Food extends Product {
    constructor(id, name, cost, discount, dateAdd, flavor) {
        super(id, name, cost, discount, dateAdd);
        this._flavor = flavor;
    }

    get flavor() {
        return this._flavor;
    }

    set flavor(flavor) {
        this._flavor = flavor;
    }

    show() {
        return `
        <li class="product" id="${this._id}">
            <div class="product_title style_flex">
                <p>${this._id}</p>
                <p>${this._name}</p>
            </div>
            <div class="product_information">
                <p>Vị: ${this._flavor}</p>
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

export default Food;