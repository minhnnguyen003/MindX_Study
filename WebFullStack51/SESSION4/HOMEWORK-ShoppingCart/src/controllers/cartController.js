const cart = require('../models/cartModal');
const listFruits = require('../models/fruitModel');

class CartController {

    // [GET] /cart
    show (req, res) {
        res.render('cart/cart',  {cart})
    }

    // [GET] /cart/update/:id_fruit
    getFruitCart (req, res) {
        const indexCart = cart.findIndex((fruit) => req.params.id_fruit == fruit.id);
        res.render('cart/cartUpdate', {fruitUpdate: cart[indexCart]});
    }

    // [POST] /cart/:id_fruit
    add (req, res) {
        const index = listFruits.findIndex((fruit) => req.params.id_fruit == fruit.id);
        const indexCart = cart.findIndex((fruit) => req.params.id_fruit == fruit.id);
        if(indexCart == -1) {
            const newFruitCard = {
                id: listFruits[index].id,
                name: listFruits[index].name,
                origin: listFruits[index].origin,
                image: listFruits[index].image,
                price: listFruits[index].price,
                amount: req.body.amount
            }
            cart.push(newFruitCard);
        }
        else {
            cart[indexCart].amount =  Number(cart[indexCart].amount) + Number(req.body.amount);
        }
        res.redirect('/cart');
    }

    // [PUT] /cart/:id_fruit
    updateFruitCart (req, res) {
        const indexCart = cart.findIndex((fruit) => req.params.id_fruit == fruit.id);
        cart[indexCart].amount = req.body.amount;
        res.redirect('/cart');
    }

    // [DELETE] /cart/:id_fruit
    deleteFruitCart (req, res) {
        const indexCart = cart.findIndex((fruit) => req.params.id_fruit == fruit.id);
        cart.splice(indexCart, 1);
        res.redirect('/cart');
    }
}

module.exports = new CartController;