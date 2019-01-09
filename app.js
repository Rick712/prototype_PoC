const express = require('express')
const app = express()
const ejs = require('ejs')
const http = require('http').Server(app)
const io = require('socket.io')(http)
const data = require('./data.json')
const genres = require('./genres.json')

genres.forEach(el => {
    console.log(el.title)
});

const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('index', {data: data, genres: genres})
})

io.on('connection', function(socket) {
    const likedGenres = []
    socket.on('likeGenre', function(genre) {
        likedGenres.push(genre)
        console.log(likedGenres)
    })
})

app.get('/admin', function (req, res) {
    res.render('admin', {genres: genres})
})

http.listen(port, function () {
    console.log('server is online at port ' + port)
})