const   socket = io.connect(),
        cards = document.querySelectorAll('.content_block'),
        heart = document.querySelector('.green_heart path'),
        cross = document.querySelector('.red_x path')

let i = 0

socket.on('like', function(genre) {
    cards[i].classList.add('like')
    const heart = document.querySelector('.green_heart path')
    heart.style.fill = 'green'
    i++
    return i
})

socket.on('dislike', function (genre) {
    cards[i].classList.add('dislike')
    i++
    return i
})

socket.on('sendBooks', function() {
    console.log('test')
    window.location = '/keywords'
})

const genreElement = document.querySelectorAll('.content_block')

genreElement.forEach((el) => {
    el.style.zIndex = el.dataset.index
})