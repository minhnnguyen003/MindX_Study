const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// parsing to json
app.use(bodyParser.json());

// paring application/x-www-form

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', './Views');
app.set('view engine', 'pug')

app.get('', (req, res) => {
    res.render('form');
})

app.post('/user-info', (req, res) => {
    const { body } = req;
    console.log(body);
    res.render("user", { body });
});

app.listen(port, () => console.log(`Server is listening at port ${port}...`))