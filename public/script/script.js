const   socket = io.connect(),
        cards = document.querySelectorAll('.content_block')

let i = 0

socket.on('like', function(genre) {
    cards[i].classList.add('like')
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
    window.location = '/result'
})

const genreElement = document.querySelectorAll('.content_block')

genreElement.forEach((el) => {
    el.style.zIndex = el.dataset.index
})