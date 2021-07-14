import Product from "./Product.js";
import Houseware from "./Houseware.js";
import Clothes from "./Clothes.js";
import Food from "./Food.js";
import {getDate} from "./supportsForm.js";

Product.addProduct(new Houseware("H1", "Tủ lạnh", 500, 0.1, getDate(), "90%"));
Product.addProduct(new Houseware("H2", "TV", 1000, 0.1, getDate(), "95%"));
Product.addProduct(new Clothes("C1", "Quần jean", 20, 0.05, getDate(), "Korean", "Vải"));
Product.addProduct(new Clothes("C2", "Áo sơ mi", 10, 0.05, getDate(), "Japan", "Vải"));
Product.addProduct(new Food("F1", "Xoài", 5, 0.02, getDate(), "Ngọt"));
Product.addProduct(new Food("F2", "Dưa hấu", 8, 0.02, getDate(), "Ngọt"));

export default Product;