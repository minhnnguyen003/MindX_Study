class Product {
    static _listProduct = [];
    static _listSell = [];
    constructor(id, name, cost, discount, dateAdd) {
        this._id = id;
        this._name = name;
        this._cost = cost;
        this._discount = discount;
        this._dateAdd = dateAdd;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get cost() {
        return this._cost;
    }

    set cost(cost) {
        this._cost = cost;
    }

    get discount() {
        return this._discount;
    }

    set discount(discount) {
        this._discount = discount;
    }

    get dateAdd() {
        return this._dateAdd;
    }

    set dateAdd(dateAdd) {
        this._dateAdd = dateAdd;
    }

    static getListProduct() {
        return this._listProduct;
    }

    static getSellProduct() {
        return this._listSell;
    }

    static addProduct(product) {
        this._listProduct.push(product);
    }

    static sellProduct(product) {
        const index = this._listProduct.findIndex((data) => {
            return data.id == product.id;
        })
        this._listProduct.splice(index, 1);
        this._listSell.push(product);
    }

    show() { };

    showSell() {
        let cost = this._cost * (1 - this._discount);
        return `
        <tr>
            <td>${this._id}</td>
            <td>${this._name}</td>
            <td>${this._cost}</td>
            <td>${this._discount * 100}%</td>
            <td>${cost}</td>
        </tr>
        `;
    }
}

export default Product;