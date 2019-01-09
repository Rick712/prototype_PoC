const express = require('express')
const app = express()
const ejs = require('ejs')
const http = require('http').Server(app)
const io = require('socket.io')(http)
const data = require('./data.json')

data.forEach(el => {
    console.log(el.Naam)
});

const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('index', data)
})

io.on('connection', function (socket) {
    socket.on('page1', function () {
        io.emit('turnPage1')
        socket.on('page1Turned', function() {
            console.log('page 1 turned')
        })
    })

    socket.on('page2', function() {
        io.emit('turnPage2')
    })
})

app.get('/admin', function (req, res) {
    res.render('admin')
})

http.listen(port, function () {
    console.log('server is online at port ' + port)
})