var express = require('express')
var app = express()

app.use(express.static('public'))
app.use(express.static('node_modules/bootstrap/dist'))

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(3000, () => {
    console.log('Chat App listening on port 3000!');
});
