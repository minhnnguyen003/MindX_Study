const listFruits = require('../models/fruitModel');

class HomeController {

    // [GET]  /home
    show (req, res) {
        res.render('home/home', {listFruits});
    }
}


module.exports = new HomeController;