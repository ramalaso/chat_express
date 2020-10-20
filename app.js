var express = require('express')
var app = express()
const expressLayouts = require('express-ejs-layouts')

app.use(express.static('public'))
app.use(express.static('node_modules/bootstrap/dist'))

app.use(expressLayouts)
app.set('layout', './layouts/layout')
app.set('view engine', 'ejs')

app.get('/rooms', (req, res) => {
    res.render('rooms')
});

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(3000, () => {
    console.log('Chat App listening on port 3000!');
});
