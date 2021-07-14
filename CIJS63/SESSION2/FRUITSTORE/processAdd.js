import Product from "./database.js";
import Houseware from "./Houseware.js";
import Clothes from "./Clothes.js";
import Food from "./Food.js";
import {getDate, closeAddForm} from "./supportsForm.js";

export const addProduct = () => {
    const id = document.getElementById("add_id").value;
    const name = document.getElementById("add_name").value;
    const cost = document.getElementById("add_cost").value;
    const type = document.getElementById("type_product").value;
    const result = document.getElementById("add_result");
    result.style.color = "red";
    if (type == "none") {
        result.textContent = "Cần chọn loại sản phẩm!";
    }
    else if (checkID(id)) {
        result.textContent = "Mã ID đã được sử dụng!";
    }
    else if (type == "houseware") {
        const reli = document.getElementById("add_reli").value;
        if (id == "" || name == "" || cost == "" || reli == "") {
            result.textContent = "Cần nhập đủ các trường!";
        }
        else {
            c
            Product.addProduct(newProduct);
            document.getElementById(type).insertAdjacentHTML('beforeend', newProduct.show());
            addResult();
        }
    }
    else if (type == "clothes") {
        const origin = document.getElementById("add_origin").value;
        const mater = document.getElementById("add_mater").value;
        if (id == "" || name == "" || cost == "" || origin == "" || mater == "") {
            result.textContent = "Cần nhập đủ các trường!";
        }
        else {
            const newProduct = new Clothes(id, name, cost, 0.1, getDate(), origin, mater);
            Product.addProduct(newProduct);
            document.getElementById(type).insertAdjacentHTML('beforeend', newProduct.show());
            addResult();
        }
    }
    else if (type == "food") {
        const fla = document.getElementById("add_fla").value;
        if (id == "" || name == "" || cost == "" || fla == "") {
            result.textContent = "Cần nhập đủ các trường!";
        }
        else {
            const newProduct = new Food(id, name, cost, 0.1, getDate(), fla);
            Product.addProduct(newProduct);
            document.getElementById(type).insertAdjacentHTML('beforeend', newProduct.show());
            addResult();
        }
    }
}

const checkID = (idProduct) => {
    return Product.getListProduct().some((product) => {
        return product.id == idProduct;
    })
}

const addResult = () => {
    const result = document.getElementById("add_result");
    result.style.color = "green";
    result.textContent = "Thêm thành công!";
    setTimeout(closeAddForm, 1000);
}
