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

app.get('/', function(req, res) {
    res.render('index', {data: books, genres: genres})
    io.on('send', function() {
        res.render('result', {books: relatedBooks})
        checkBook()
    })
})

io.on('connection', function(socket) {
    socket.on('likeGenre', function(genre) {
        likedGenres.push(genre)
    })
    socket.on('send', function () {
        console.log(likedGenres)
    })
})

const checkBook = function() {

    likedGenres.forEach((genre) => {
        books.forEach((book) => {
            if(book.Genre.includes(genre)) {
                relatedBooks.push(book)
            }
        })
    })
    console.log(relatedBooks)
    return relatedBooks
}

app.get('/admin', function (req, res) {
    res.render('admin', {genres: genres})
    likedGenres = []
    relatedBooks = []
})

app.get('/result', function (req, res) {
    checkBook()
    res.render('result', {books: relatedBooks})
})

http.listen(port, function () {
    console.log('server is online at port ' + port)
})