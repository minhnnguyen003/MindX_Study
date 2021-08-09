const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cartController');
const cart = require('../models/cartModal');

cartRouter.get('/', cartController.show);
cartRouter.get('/update/:id_fruit', cartController.getFruitCart)
cartRouter.post('/:id_fruit', cartController.add);
cartRouter.put('/:id_fruit', cartController.updateFruitCart);
cartRouter.delete('/:id_fruit', cartController.deleteFruitCart);


module.exports = cartRouter;