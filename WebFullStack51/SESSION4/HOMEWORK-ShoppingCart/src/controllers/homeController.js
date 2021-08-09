const listFruits = require('../models/fruitModel');

class HomeController {

    // [GET]  /home
    show (req, res) {
        res.render('home/home', {listFruits});
    }

    // [GET] /home/:id_fruit/buy
    showFruit (req, res) {
        const index = listFruits.findIndex((fruit) => req.params.id_fruit == fruit.id)
        res.render('home/homeBuy', { fruit: listFruits[index] });
    }
}


module.exports = new HomeController;