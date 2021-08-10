const express = require('express');
const homeRouter = express.Router();
const homeController = require('../controllers/homeController')

homeRouter.get('/home', homeController.show);

module.exports = homeRouter;