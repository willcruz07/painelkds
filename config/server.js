const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./public'));

module.exports = app;