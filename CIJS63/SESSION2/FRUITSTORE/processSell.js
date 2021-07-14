import Product from "./database.js";

const sell = (idProduct) => {
    document.getElementById(idProduct).remove();
    Product.sellProduct(Product.getListProduct().find((product) => {
        return product.id == idProduct;
    }))
    console.log(Product.getSellProduct());
}

const getCost = () => {
    document.getElementById("store_add").style.display = "none";
    document.getElementById("store_cost").style.display = "none";
    document.getElementById("sell").style.display = "block";
    let stringSell = `
    <tr>
        <th>ID</th>
        <th>Tên sản phẩm</th>
        <th>Đơn giá</th>
        <th>Giảm giá</th>
        <th>Thành tiền</th>
    </tr>`;
    let sumCost = 0;
    Product.getSellProduct().forEach((product) => {
        stringSell += product.showSell();
        sumCost += Number(product.cost) *(1 - Number(product.discount));
    })
    document.querySelector("#sell_content table").innerHTML = stringSell;
    document.getElementById("sumCost").textContent = `Tổng tiền: ${sumCost.toFixed(2)}$`;
}

const closeCost = () => {
    document.getElementById("store_add").style.display = "block";
    document.getElementById("store_cost").style.display = "block";
    document.getElementById("sell").style.display = "none";
}

export {sell, getCost, closeCost};