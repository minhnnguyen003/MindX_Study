const historyCarts = require('../models/historyModal');
const cart = require('../models/cartModal');
const { getTime } = require('../utils/util');

class HistoryController {

    // [GET] /history
    show (req, res) {
        res.render('history/history', {historyCarts});
    }
    // [GET] /history/:id_cart
    showCart (req, res) {
        const indexHis = historyCarts.findIndex((cart) => cart.id == req.params.id_cart);
        res.render('history/historyCart', {cart: historyCarts[indexHis].cart, totals: historyCarts[indexHis].totals});
    }

    // [POST] /history
    addCart (req, res) {
        const id = getTime();
        const newCart = [];
        let totals = 0;
        cart.forEach((fruit) => {totals += fruit.price * fruit.amount; newCart.push(fruit)});
        const newCartHistory = {id, cart: newCart, totals};
        historyCarts.push(newCartHistory);
        cart.splice(0, cart.length);
        res.redirect('/history');
    }
}

module.exports = new HistoryController;