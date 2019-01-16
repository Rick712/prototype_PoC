const socket = io.connect(),
    cards = document.querySelectorAll('.content_block')

let i = 0

socket.on('likeKeyword', function (genre) {
    cards[i].classList.add('like')
    i++
    return i
})

socket.on('dislikeKeyword', function (genre) {
    cards[i].classList.add('dislike')
    i++
    return i
})

const genreElement = document.querySelectorAll('.content_block')

genreElement.forEach((el) => {
    el.style.zIndex = el.dataset.index
})