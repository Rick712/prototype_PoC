const socket = io.connect() 

const   dislike = document.querySelectorAll('#dislike'),
        like = document.querySelectorAll('#like'),
        send = document.querySelector('#send'),
        initBtn = document.querySelector('.init_app')

if(like) {
    like.forEach((likeBtn) => {
        likeBtn.addEventListener('click', function (e) {
            const genre = e.target.dataset.genre
            socket.emit('likeGenre', genre)
        })
    })
    dislike.forEach((dislikeBtn) => {
        dislikeBtn.addEventListener('click', function(e) {
            const genre = e.target.dataset.genre
            socket.emit('dislikeGenre', genre)
        })
    })
}

initBtn.addEventListener('click', () => {
    socket.emit('init')
})

send.addEventListener('click', function () {
    socket.emit('send')
    window.location = '/adminkeywords'
})