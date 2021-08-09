const express = require('express');
const homeRouter = express.Router();
const homeController = require('../controllers/homeController')

homeRouter.get('/home', homeController.show);
homeRouter.get('/home/:id_fruit/buy', homeController.showFruit);

module.exports = homeRouter;