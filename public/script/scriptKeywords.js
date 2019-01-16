const socket = io.connect(),
    cards = document.querySelectorAll('.content_block'),
    heart = document.querySelector('.green_heart path'),
    cross = document.querySelector('.red_x path')

let i = 0

socket.on('likeKeyword', function (genre) {
    cards[i].classList.add('like')
    heart.style.fill = 'rgba(0, 255, 0, 1)'
    setTimeout(() => {
        heart.style.fill = 'inherit'
    }, 500)
    i++
    return i
})

socket.on('dislikeKeyword', function (genre) {
    cards[i].classList.add('dislike')
    cross.style.fill = 'rgba(255, 0, 0, 1)'
    setTimeout(() => {
        cross.style.fill = 'inherit'
    }, 500)
    i++
    return i
})

const genreElement = document.querySelectorAll('.content_block')

genreElement.forEach((el) => {
    el.style.zIndex = el.dataset.index
})

socket.on('result', () => {
    window.location = '/result'
})