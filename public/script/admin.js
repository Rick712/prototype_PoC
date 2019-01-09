const socket = io.connect() 

const   dislike = document.querySelectorAll('#dislike'),
        like = document.querySelectorAll('#like'),
        send = document.querySelector('#send')

if(like) {
    like.forEach((likeBtn) => {
        likeBtn.addEventListener('click', function (e) {
            const genre = e.target.dataset.genre
            socket.emit('likeGenre', genre)
        })
    })
}

send.addEventListener('click', function () {
    socket.emit('send')
})