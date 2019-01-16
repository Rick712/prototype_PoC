const express = require('express')
const app = express()
const ejs = require('ejs')
const http = require('http').Server(app)
const io = require('socket.io')(http)
const books = require('./data.json')
const genres = require('./genres.json')

const port = 3000

let likedGenres = [], 
    relatedBooks = [],
    likedKeywords = [],
    finalBooks = [],
    totalLikes = {}

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('start', {genres: genres})
})

io.on('connection', (socket) => {
    socket.on('likeGenre', (genre) => {
        likedGenres.push(genre)
        io.emit('like', genre)
    })
    socket.on('dislikeGenre', (genre) => {
        io.emit('dislike', genre)
    })
    socket.on('send', () => {
        io.emit('sendBooks')
        checkBook()
    })
    socket.on('likeSteekwoord', (keyword) => {
        likedKeywords.push(keyword)
        console.log(likedKeywords)
        io.emit('likeKeyword')
    })
    socket.on('dislikeSteekwoord', () => {
        io.emit('dislikeKeyword')
    })

    socket.on('finalResult', () => {
        io.emit('result')
        checkKeywords()
    })
})

const checkBook = () => {
    
    likedGenres.forEach((genre) => {
        books.forEach((book) => {
            if(book.Genre.includes(genre)) {
                relatedBooks.push(book)
            }
        })
    })
    return relatedBooks
}

const checkKeywords = () => {
    likedKeywords.forEach((word) => {
        books.forEach((book) => {
            if(book.Steekwoorden.includes(word)) {
                finalBooks.push(book)
            }
        })
    })
    console.log(finalBooks)
    return finalBooks
    result()
}

const result = () => {
    finalBooks.forEach((book) => {
        book.Steekwoorden.forEach((word) => {
            if (likedKeywords.includes(word)) {
                totalLikes.push(book.title, word)
            }
        })
    })
    console.log(totalLikes)
}

app.get('/admin', (req, res) => {
    likedGenres = []
    relatedBooks = []
    res.render('admin', {genres: genres})
})

app.get('/adminkeywords', (req, res) => {
    res.render('admin_keywords', { books: relatedBooks })
})

app.get('/keywords', (req, res) => {
    res.render('keywords', {books: relatedBooks})
})

app.get('/result', (req, res) => {
    res.render('result', {results: finalBooks})
})

http.listen(port, () => {
    console.log('server is online at port ' + port)
})