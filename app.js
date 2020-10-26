var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');
var admin = require('./admin');


app.set('layout', './layouts/layout');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));

app.use('/', admin);

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.listen(3000, () => {
    console.log('Chat App listening on port 3000!');
});
