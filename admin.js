const express = require('express');
const app = express.Router();
var rooms = require('./data/rooms.json');
const uuid = require('node-uuid');
var _ = require('lodash');

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
app.post('/rooms/edit/:id', (req, res) => {
    // var roomId = req.params.id;
    // var roomName = req.body.name;
    // rooms = rooms.filter(r => r.id != roomId);
    // var room = {
    //     name: roomName,
    //     id: roomId
    // };
    // rooms.push(room);
    // res.redirect('/rooms');
    var roomId = req.params.id;
    var room = _.find(rooms, r => r.id === roomId);
    if (!room) {
        res.sendStatus(404);
        return;
    }
    room.name = req.body.name;
    res.redirect('/rooms');
});

app.get('/rooms/delete/:id', (req, res) => {
    var roomId = req.params.id;
    rooms = rooms.filter(r => r.id != roomId);
    res.redirect('/rooms');
});

app.get('/rooms/edit/:id', (req, res) => {
    var roomId = req.params.id;
    var room = rooms.filter(r => r.id === roomId);
    res.render('edit', { title: "Add rooms", room });
    // res.redirect('/rooms');
});

module.exports = app;