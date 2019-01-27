const socket = io.connect()

const dislike = document.querySelectorAll('#dislike'),
    like = document.querySelectorAll('#like'),
    send = document.querySelector('#send'),
    restart = document.querySelector('#restart')

if (like) {
    like.forEach((likeBtn) => {
        likeBtn.addEventListener('click', function (e) {
            const steekwoord = e.target.dataset.steekwoord
            socket.emit('likeSteekwoord', steekwoord)
            console.log(steekwoord)
        })
    })
    dislike.forEach((dislikeBtn) => {
        dislikeBtn.addEventListener('click', function (e) {
            const steekwoord = e.target.dataset.steekwoord
            socket.emit('dislikeSteekwoord', steekwoord)
        })
    })
}

send.addEventListener('click', function () {
    socket.emit('finalResult')
})

restart.addEventListener('click', function () {
    socket.emit('restart')
})

socket.on('restartApp', () => {
    window.location = '/admin'
})