var express = require('express')
var app = express()
var expressLayouts = require('express-ejs-layouts')
var rooms = require('./data/rooms.json') 

app.use(express.static('public'))
app.use(express.static('node_modules/bootstrap/dist'))

app.use(expressLayouts)
app.set('layout', './layouts/layout')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { title: 'Home'})
});

app.get('/rooms', (req, res) => {
    res.render('rooms', { title: 'Admin Rooms', rooms: rooms})
});

app.listen(3000, () => {
    console.log('Chat App listening on port 3000!');
});
