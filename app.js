var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');
var rooms = require('./data/rooms.json');
const uuid = require('node-uuid');

app.set('layout', './layouts/layout');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/rooms', (req, res) => {
    res.render('rooms', { title: 'Admin Rooms', rooms: rooms });
});

app.get('/rooms/add', (req, res) => {
    res.render('add', { title: "Add rooms" });
});

app.post('/rooms/add', (req, res) => {
    var room = {
        name: req.body.name,
        id: uuid.v4()
    };
    rooms.push(room);
    res.redirect('/rooms');
});

app.get('/rooms/delete/:id', (req, res) => {
    var roomId = req.params.id;
    rooms = rooms.filter(r => r.id != roomId);
    res.redirect('/rooms');
});

app.listen(3000, () => {
    console.log('Chat App listening on port 3000!');
});
