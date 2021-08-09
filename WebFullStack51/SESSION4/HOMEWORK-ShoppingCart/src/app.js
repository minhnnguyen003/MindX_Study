const express = require('express');
const app = express();
const port = 3000;  // set port listening
const path = require('path');
const handlebars = require('express-handlebars'); // template engine handlebars
const router = require('./routers/router'); // router
const methodOverride = require('method-override'); // override method

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded());

// using query value set method
app.use(methodOverride('_method'));

// template engine
app.engine('hbs', handlebars({extname: '.hbs',
                              helpers: {
                                  sum: (a,b) => a + b,
                                  mul: (a,b) => a * b,
                                  changeTime: (t) => {
                                      const time = new Date(t);
                                      return `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}   ${time.getDay()}/${time.getMonth() + 1}/${time.getFullYear()}`;
                                  }
                              }}));
app.set('view engine', 'hbs' );
app.set('views', path.join(__dirname , 'resources', 'views'));

// init router
router(app);

// start app
app.listen(port, () => console.log(`App is listening at port 3000...`));

