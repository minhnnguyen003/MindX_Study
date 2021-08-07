// show module info

//console.log(module);

// built-in module

// path module

const path = require('path');
const filename = path.basename('/Users/TestPath/demo.js');
console.log(filename)

// os module 

const os = require('os');
console.log('Platform:', os.platform());
console.log('Architecture: ', os.arch());

// query string

const queryString = require('querystring');
const query = queryString.parse('search=oto&year=2018&model=audi');
console.log(query);

// http module

const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('Hello World');
}).listen(2709);