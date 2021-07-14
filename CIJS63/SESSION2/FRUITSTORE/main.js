import Product from "./database.js";
import Houseware from "./Houseware.js";
import Clothes from "./Clothes.js";
import Food from "./Food.js";

const changeArray = () => {
    const list = Product.getListProduct();
    const listProduct = {
        "houseware": [],
        "clothes": [],
        "food" : [],
    }
    for(let product of list){
        if(product instanceof Houseware) {
            listProduct["houseware"].push(product);
        }
        else if(product instanceof Clothes) {
            listProduct["clothes"].push(product);
        }
        else if(product instanceof Food) {
            listProduct["food"].push(product);
        }
    }
    return listProduct;
}

const getHTML = () => {
    const listProduct = changeArray();
    for (let pro in listProduct) {
        let stringData = "";
        listProduct[pro].forEach((data) => {
            stringData += data.show();
        })
        document.getElementById(pro).innerHTML = stringData;
    }
}

getHTML();






