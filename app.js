const express = require('express')
const app = express()
const ejs = require('ejs')
const http = require('http').Server(app)
const io = require('socket.io')(http)
const books = require('./data.json')
const genres = require('./genres.json')

const port = 3000

let likedGenres = [], 
    relatedBooks = []

app.set('view engine', 'ejs')
app.use(express.static('public'))

// app.get('/', function(req, res) {
//     res.render('index', {data: books, genres: genres})
//     socket.on('send', function() {
//         io.emit('sendBooks')
//         checkBook()
//     })
// })

app.get('/start', function(req, res) {
    res.render('start', {genres: genres})
})

io.on('connection', function(socket) {
    socket.on('likeGenre', function(genre) {
        likedGenres.push(genre)
        io.emit('like', genre)
    })
    socket.on('dislikeGenre', function(genre) {
        io.emit('dislike', genre)
    })
    socket.on('send', function () {
        console.log(likedGenres)
        io.emit('sendBooks')
        checkBook()
    })
})

const checkBook = function() {

    console.log('test')
    
    likedGenres.forEach((genre) => {
        books.forEach((book) => {
            if(book.Genre.includes(genre)) {
                relatedBooks.push(book)
            }
        })
    })
    return relatedBooks
}

app.get('/admin', function (req, res) {
    likedGenres = []
    relatedBooks = []
    res.render('admin', {genres: genres})
})

app.get('/result', function (req, res) {
    res.render('result', {books: relatedBooks})
})

http.listen(port, function () {
    console.log('server is online at port ' + port)
})