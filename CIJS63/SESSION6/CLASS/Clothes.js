import Product from "./Product.js";

class Clothes extends Product {
    constructor(id, name, cost, discount, dateAdd, origin, material) {
        super(id, name, cost, discount, dateAdd);
        this._origin = origin;
        this._material = material;
    }

    get origin() {
        return this._origin;
    }

    set origin(origin) {
        this._origin = origin;
    }

    get material() {
        return this._material;
    }

    set material(material) {
        this._material = material;
    }

    show() {
        return `
        <li class="product" id="${this._id}">
            <div class="product_title style_flex">
                <p>${this._id}</p>
                <p>${this._name}</p>
            </div>
            <div class="product_information">
                <p>Xuất xứ: ${this._origin}<span>Chất liệu: ${this._material}</span></p>
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

export default Clothes;
